# Simple Calculator

This is a basic calculator web application built with HTML, JavaScript, and Node.js + Express. It allows users to perform basic arithmetic operations: Addition, Subtraction, Multiplication, and Division through a simple UI and server-side API.

📁 Project Structure

calculator-project/
│
├── backend/
│   └── server.js         # Express backend server
│
├── frontend/
│   ├── index.html        # HTML UI
│   └── script.js         # JavaScript logic with Axios
│
└── README.md             # Project overview (this file)

🚀 How to Run
1. Prerequisites
Make sure you have:

Node.js installed

A terminal or command prompt

2. Setup Instructions

# Clone or move into the project directory
cd calculator-project/backend

# Install dependencies
npm install express cors

3. Start the Server

node server.js

This will start your backend at:
📡 http://localhost:3002

4. Access the Calculator
Now open your browser and visit:
🌐 http://localhost:3002

⚙️ Features
Addition (+)

Subtraction (-)

Multiplication (*)

Division (/)

Handles division by zero

Axios-based frontend-to-backend communication

🛠️ Tech Stack
Frontend: HTML5, JavaScript (Axios)

Backend: Node.js, Express

CORS: Enabled for cross-origin requests

📌 Notes
The frontend is served statically from the frontend/ folder by the Express server.

Make sure the backend and frontend folders are siblings or update paths accordingly.

Division by zero will return an error message.

