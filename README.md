
#  Blog

Khudka Blog is a personal blogging platform where users can create accounts, log in, and share their thoughts through blogs.

## Features

- User Signup
- User Login
- Password Hashing using bcrypt
- Duplicate Email Validation
- Default Profile Picture
- Responsive UI

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- MongoDB
- Mongoose

Authentication:
- bcrypt
- express-session (in progress)

## Installation

1. Clone the repository

git clone <repository-url>

2. Move into project directory

cd khudka-blog

3. Install dependencies

npm install

4. Create a .env file

MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_secret_key

5. Start server

npm start

## Folder Structure

khudka-blog/
│
├── db/
├── models/
├── routes/
├── views/
├── uploads/
├── .env
├── app.js
├── package.json
└── README.md

## Screenshots

Signup Page
Login Page
Home Page

## Future Enhancements

- JWT Authentication
- Create Blog Feature
- Edit/Delete Blog
- Profile Management
- Image Upload
- Dark Mode