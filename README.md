# Attendance-Tracker-using-Fingerprint

## About
The **Attendance-Tracker-using-Fingerprint** is a web application designed to enable professors to monitor student attendance through a secure and intuitive platform. The application uses fingerprint-based authentication to track attendance and provides real-time statistics on the dashboard for easy analysis. The project is built using **MongoDB**, **Node.js**, and **Tailwind CSS** for the frontend and backend, with **Python** used for fingerprint recognition.

## File Structure
Attendance-Tracker-using-Fingerprint/ ├── Website_code/ # Frontend and backend code │ ├── backend/ # Node.js backend code (API, MongoDB integration) │ ├── pages/ # Web platform pages │ ├── assets/ # Stylesheets, scripts, and images ├── finger_auth_codes/ # Fingerprint recognition program in Python │ ├── fing/ # Stored fingerprints for authentication

# Key Features

- **Fingerprint-based Authentication:** Ensures secure and accurate attendance tracking by matching students' fingerprints with the pre-stored database.
- **Dashboard with Real-time Statistics:** Professors and admins can view and analyze attendance data in real-time.
- **MongoDB Database Integration:** Uses MongoDB to store attendance records and student information.
- **RESTful API:** The backend exposes different API endpoints that the frontend consumes to manage attendance data.
- **User-friendly Interface:** Built using Tailwind CSS to ensure a clean and intuitive user experience for professors and administrators.

## Technologies Used

- **Frontend:** HTML, JavaScript, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Python (OpenCV), Fingerprint Recognition System
- **Database:** MongoDB

## Setup

### Prerequisites

- Node.js
- MongoDB
- Python 3.x

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Attendance-Tracker-using-Fingerprint.git
   cd Attendance-Tracker-using-Fingerprint
2. Install the required dependencies for the frontend and backend:
   ```bash
   cd Website_code
   npm install
3. Set up MongoDB and ensure it's running.
4. Set up Python environment for fingerprint recognition:
   -Install the required libraries:
      ```bach
      pip install opencv-python requests
5. Start the backend server:
     ```bash
     npm start
6. Open the website in your browser by navigating to http://localhost:3000.
      ```bash
      Open the website in your browser by navigating to http://localhost:3000.

