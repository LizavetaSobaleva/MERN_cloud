# MERN Stack Cloud Storage

## DEMO: https://client-0y7p.onrender.com/

This is a cloud storage application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to securely store and manage their files in the cloud.

## Architecture
The project consists of two main components: the client-side application and the server-side application. The client-side application, built using React.js, provides the user interface for interacting with the cloud storage system. On the other hand, the server-side application, developed using Node.js and Express.js, handles user authentication, file management operations, and communication with the database.

Files uploaded by users are securely stored on the server's file system. The MongoDB database is used to store user authentication data (such as usernames and hashed passwords) and metadata about the files (such as filenames, types, sizes, and paths).

## Features

- User Authentication: Users can sign up, log in, and log out securely.
- File Upload: Users can upload files to the cloud storage.
- File Management: Users can view, download, and delete their files.
- Search Functionality: Users can search for files by name or type.

## Technologies Used

- MongoDB: A NoSQL database used to store user data and file metadata.
- Express.js: A Node.js framework used for building the backend RESTful API.
- React.js: A JavaScript library used for building the frontend user interface.
- Node.js: A JavaScript runtime environment used for running the backend server.
- JSON Web Tokens (JWT): Used for user authentication and authorization.
- Axios: A promise-based HTTP client for making API requests.

## Screensots
### Main page
![Screenshot of main page](screenshots/main_page.png)

### Different views 
![Screenshot of list view](screenshots/list.png) 

![Screenshot of plate view](screenshots/plate.png)

### Profile page
![Screenshot of profile page](screenshots/profile.png)
