# E-Waste Recycling Solutions

![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)
![Chakra UI](https://img.shields.io/badge/-Chakra%20UI-319795?logo=chakraui&logoColor=white&style=for-the-badge)
![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge)
![Google Maps API](https://img.shields.io/badge/-Google%20Maps%20API-4285F4?logo=googlemaps&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)
![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=for-the-badge)
![Cloudinary](https://img.shields.io/badge/-Cloudinary-3448C5?logo=cloudinary&logoColor=white&style=for-the-badge)
![Brevo](https://img.shields.io/badge/-Brevo-4EA94B?logo=sendinblue&logoColor=white&style=for-the-badge)
![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)


**E-Waste Recycling Solutions** is a web app that simplifies e-waste disposal by providing an intuitive platform for scheduling pickups and tracking collection status in real time. Functioning like a ride-hailing service, users can easily request e-waste pickups from the comfort of their location.

The app features two roles: regular users who request pickups and collectors/riders who access and fulfill these requests. This structure ensures an efficient e-waste management process, promoting sustainable practices and empowering users to contribute to a cleaner planet.

![E-Waste Dashboard](https://github.com/user-attachments/assets/c0c73dc8-de59-4381-a131-82997ffe7aae)

## Table of Contents

- [Key Features](#key-features)
- [Usage](#usage)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configure Environment Variables](#configure-environment-variables)
  - [Run the Application](#run-the-application)
- [License](#license)
- [Acknowledgments](#acknowledgments)


## Key Features
- **Secure User Authentication** 
- **Easy Scheduling** 
- **Pick-Off Locator** 
- **Real-Time Collection Tracking** 
- **Notifications** 


## Usage

1. **Register and Sign Up** 
![- Visit the registration page and fill in your details.](https://github.com/user-attachments/assets/e337c3f1-cda7-4757-8997-7f38dda1a666)
2. **Login**
![- Verify and use your credentials to log in.](https://github.com/user-attachments/assets/8d43920f-f157-47a5-ac4c-c86cacb748c6)
3. **Request a Pick-up Collection**
![- Click on 'Request Collection' and provide necessary](https://github.com/user-attachments/assets/940eeb17-166b-4e06-ae62-8c76cb6c3140)
4. **Confirm the Pick-Up Location**
![- Confirm your location for the pick-up.](https://github.com/user-attachments/assets/f8579525-1aff-4aee-99d8-f378efd0e653)
5. **Track your Collection in Real-Time**
![- Track your collection status in real-time via the dashboard.](https://github.com/user-attachments/assets/08aca758-a68b-4e96-a45a-1561986c1fdd)


## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the Repository
```bash
git clone https://github.com/CynthiaWahome/ewaste-recycling-solutions.git
cd ewaste-recycling-solutions
```

### Configure Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables 

```
# Brevo API Keys
BREVO_API_KEY=
BREVO_SMTP_USER=
BREVO_SMTP_PASSWORD=

# Client URL
CLIENT_URL=

# Cloudinary Configuration
CLOUDINARY_API_SECRET=
CLOUDINARY_API_KEY=
CLOUDINARY_CLOUD_NAME=

# JWT Secret Key
JWT_SECRET_KEY=

# MongoDB Connection Strings
MONGO_URL=
MONGO_URL_PROD=

# Server Port
PORT=

# Mailgun Configuration
API_KEY=
DOMAIN=

```


**Frontend Environment Variables**

Create a `.env` file in the `frontend` directory and add the necessary environment variables for Vite:

```
VITE_GOOGLE_MAPS_API_KEY=your-google-api-key-here
```

### Run the Application

To run both the frontend and backend of the application simultaneously, follow these steps:

1. **Frontend Setup**
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

2. **Backend Setup**
   - Open a new terminal window or tab, then navigate to the backend directory (if applicable):
     ```bash
     cd backend
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Start the backend development server:
     ```bash
     npm run dev
     ```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


## Acknowledgments
Special thanks to [Itsfoss0](https://github.com/Itsfoss0) for the support in developing this project.
