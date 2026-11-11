COMP 3123 – Full Stack Development I

Lab Week 10: React JS Data Entry Form

📋 Overview

This project is a React JS web application developed as part of Lab Week 10 for COMP 3123. The application demonstrates dynamic form handling, component state management using React Hooks, and reactive UI rendering based on user interaction.

The exercise is split into two core sections:

Part I: Data Entry Form — A structured form that collects user input including Email, Full Name, Address, City, Canadian Province selection, Postal Code, and Terms Agreement.

Part II: Submission Output Display — Dynamically renders and displays the submitted form information at the bottom of the page upon form submission.

🛠️ Tools & Technologies Used

Node.js (Runtime Environment)

NPM (Node Package Manager)

React.js (Frontend JavaScript Library)

HTML5 / CSS3 (Form Structure & In-line Styling)

Git / GitHub (Version Control System)

🚀 Getting Started & Execution Instructions

Prerequisites

Ensure Node.js and NPM are installed on your system. Verification command:

node --version
npm --version


1. Clone & Setup Repository

Clone the repository to your local machine:

git clone <YOUR_GITHUB_REPOSITORY_URL>
cd labweek10


2. Install Dependencies

Install all required Node dependencies:

npm install


3. Run the Development Server

Launch the React application in development mode:

npm start


The app will automatically open and run at http://localhost:3000 in your browser.

📁 Project Folder Structure

labweek10/
├── node_modules/         # Dependencies (Excluded before zipping)
├── public/
│   ├── index.html        # Main HTML file template
│   └── favicon.ico
├── src/
│   ├── App.js            # Main React component containing Form logic & State
│   ├── App.css           # Styling rules
│   ├── index.js          # Entry point for React DOM rendering
│   └── index.css
├── .gitignore            # Git exclusion settings
├── package.json          # Project metadata and dependencies script
└── README.md             # Lab documentation


📝 Form Submission Format (Part II Output)

Upon filling in the inputs and pressing the Submit button, the app captures the live state and displays formatted output below the form:

Submission Details:
------------------------------------------
Email:       | user@georgebrown.ca
Full Name:   | Student Name
Address:     | 160 Kendal Ave
City:        | Toronto
Province:    | Ontario
Postal Code: | M5R 1M3
------------------------------------------


📦 Submission Checklist (For Instructor Review)

[x] Node environment verified (node --version)

[x] Application bootstrapped using npx create-react-app labweek10

[x] GitHub repository created and updated (labweek10)

[x] Part I: Full form fields and dropdown implemented

[x] Part II: Form data rendered on submit action

[x] node_modules folder removed before archiving

[x] Project packaged into labweek10.zip

Developed for COMP 3123 – Full Stack Development I.