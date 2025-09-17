
import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';

import express from 'express';
import MongoStore from 'connect-mongo';
import { connectDB } from './config/db.js';
import cors from 'cors';
import session from 'express-session';
import passport from './config/passport.js'

import movieRouter from './routes/movieRoutes.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import path from 'path';



const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

// CORS configuration
if (process.env.NODE_ENV !== 'production') {
    app.use(cors({
        origin: process.env.FRONTEND_URL,
        credentials: true //allow cookies to travel
    }));
}



//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', 1); // trust first proxy

app.use(session({
  name: 'movieapp.sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  cookie: {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === 'prod', // Fares this is to ensure cookies are only sent over HTTPS in production
    sameSite: process.env.NODE_ENV === 'prod' ? 'none' : 'lax' // Fares this is to ensure cookies are sent in cross-site requests in production, also requires HTTPS
  }
}));

//Passport
app.use(passport.initialize());
app.use(passport.session());

// API routes
app.use('/api/movies', movieRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

// Serve static files from the React frontend app
if (process.env.NODE_ENV === 'production') {
  const staticPath = path.join(__dirname, '../Frontend/dist');
  console.log('Static path:', staticPath);
  console.log('Static path exists:', fs.existsSync(staticPath));
  console.log('Contents of dist:', fs.readdirSync(staticPath));
  
  app.use(express.static(staticPath));

  app.get(/.*/, (req, res) => {
    const indexPath = path.join(__dirname, '../Frontend/dist', 'index.html');
    console.log('Serving index.html from:', indexPath);
    console.log('Index.html exists:', fs.existsSync(indexPath));
    res.sendFile(indexPath);
  });
}

// Connect to DB and start server

connectDB().then(
    () => {
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    }
);

