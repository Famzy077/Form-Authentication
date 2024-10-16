**Authentication Project 🔐 README**
Introduction
This is a Node.js authentication project that provides user signup, login, forgot password, and reset password functionality. The project utilizes JSON Web Tokens (JWT) for authentication, cookies for session management, and Nodemailer for sending password reset emails.

Getting Started
Prerequisites
Node.js (version 14 or higher)
npm (version 6 or higher)
Installation
Clone the repository: git clone https://github.com/your-username/your-repo-name.git
Install dependencies: npm install
Set up environment variables:
JWT_SECRET: a secret key for signing JWTs
COOKIE_SECRET: a secret key for signing cookies
NODEMAILER_EMAIL: the email address used for sending password reset emails
NODEMAILER_PASSWORD: the password for the email address above
Start the server: npm start
Features
User Signup: Create a new user account with a unique email and password.
User Login: Log in to an existing user account using email and password.
Forgot Password: Send a password reset email to the user's registered email address.
Reset Password: Reset the user's password using the token sent in the password reset email.
Technical Details
Node.js: The project is built using Node.js as the server-side runtime environment.
JWT: JSON Web Tokens are used for authentication and session management.
Cookies: Cookies are used to store the JWT token and manage user sessions.
Nodemailer: Nodemailer is used to send password reset emails to users.
Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License.

Example Use Cases
Signup: Send a POST request to /signup with the user's email and password in the request body. 🔐
Login: Send a POST request to /login with the user's email and password in the request body.
Forgot Password: Send a POST request to /forgot-password with the user's email in the request body.
Reset Password: Send a POST request to /reset-password with the user's email, token, and new password in the request body.
