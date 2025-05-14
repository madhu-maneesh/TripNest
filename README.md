# TripNest

TripNest is a web application that allows users to browse, create, edit, and manage listings of various properties for travelers. It includes features like:

- User authentication (Sign up, Sign in, Sign out)
- Listings management (Create, Edit, Delete)
- Review system with emoji and comments
- Responsive UI using Bootstrap and EJS templates

## Features

- **User Authentication**: Users can create accounts, log in, and manage their sessions.
- **CRUD Operations**: Create, read, update, and delete listings for various types of buildings.
- **Reviews & Ratings**: Users can post reviews using emoji and comments.
- **Responsive Design**: The site is mobile-friendly and works seamlessly on all devices.

## Tech Stack

- **Frontend**: HTML, CSS, EJS templates, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing listings and user data)
  
## Authentication

TripNest uses **Passport.js** with the **Local Strategy** for user authentication. It allows users to:

- **Sign up** with a username and password.
- **Sign in** securely using their credentials.
- **Sign out** and manage their session.

The authentication flow includes:
- **Password hashing** with **bcrypt** for secure storage.
- **Session management** with **express-session** and **Passport.js**.
  
## Setup

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node package manager)
- **MongoDB** (locally installed or use **MongoDB Atlas** for cloud storage)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/madhu-maneesh/TripNest.git
