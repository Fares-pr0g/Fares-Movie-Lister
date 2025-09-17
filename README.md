<div style="text-align:right">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  <img src="https://img.shields.io/badge/Live-Demo-blue.svg" alt="Live Demo">
</div>

# Fares' Movie Lister 🎬

## **🚀 Live Demo** [Click here to view the live app](https://fares-movie-lister.onrender.com/) 
Btw it might take a minute or so to go live, since I'm using the brokie option on render🤭

### This is a full-stack Movies project where I found the opportunity to learn authentication with Google OAuth2 and GitHub Auth.

## 📖 Overview

Fares-Movie-Lister is a web application that lets users browse, search, and manage a list of movies. The app features authentication, allowing users to sign in with Google or GitHub and personalize their experience.

## 🛠️ Tech Stack
- Frontend: JavaScript, React, CSS
- Backend: Node.js, Express.js
- Authentication: Google OAuth2 & GitHub Auth
- Database: (MongoDB/your DB here)
- Deployment: Render

## Features

- Browse and search movies
- User authentication with Google and GitHub
- Personalized movie lists for each user
- Responsive design

## 🏗️ Directory Structure

```
.
├── Backend/          # Backend code (Node.js, Express.js, and Auth)
│   ├── controllers/  # API route controllers
│   ├── models/       # Database models (e.g., Movie, User)
│   ├── routes/       # API routes
│   ├── utils/        # Utility functions and middleware
│   └── app.js        # Main backend entry point
├── Frontend/         # Frontend code (React, CSS)
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # Page components (e.g., Home, Auth)
│   │   ├── App.js      # Main React app
│   │   └── index.js    # Entry point
│   └── public/
├── .gitignore
└── package.json
```

## 📦 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fares-pr0g/Fares-Movie-Lister.git
   cd Fares-Movie-Lister
   ```

2. **Install dependencies**
   ```bash
   npm install
   # Or install separately in Backend and Frontend folders if needed
   ```

### Running the App

- Start the backend server (see Backend/README.md for details if available)
- Start the frontend server (see Frontend/README.md for details if available)
- Make sure to set up environment variables for authentication and database connections.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

This project is licensed under the MIT License.
