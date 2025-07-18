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

## AI Suggestion Feature

The AI-powered suggestion system allows users to get travel ideas based on natural language input.  
Example prompt:  
> “3-day budget-friendly trip near Bangalore with hills and good food”

**Powered by:** [OpenRouter.ai](https://openrouter.ai)

## Tech Stack

- **Frontend**: HTML, CSS, EJS templates, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing listings and user data)
-**AI Integration**: OpenRouter API (GPT-style models)
  
## Authentication

TripNest uses **Passport.js** with the **Local Strategy** for user authentication. It allows users to:

- **Sign up** with a username and password.
- **Sign in** securely using their credentials.
- **Sign out** and manage their session.

The authentication flow includes:
- **Password hashing** with **bcrypt** for secure storage.
- **Session management** with **express-session** and **Passport.js**.
  
## Screenshots
Homepage of the TripNest
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/0ba371d3-a4ed-45a3-9234-01644d3bc5b4" />

<img width="1920" height="1020" alt="Screenshot 2025-07-18 141937" src="https://github.com/user-attachments/assets/239526ce-db6c-4376-997e-15c54d6966f3" />
<img width="1920" height="1020" alt="Screenshot 2025-07-18 141918" src="https://github.com/user-attachments/assets/1f965a4a-d38d-4d42-996a-e5f6981c2fc0" />


<img width="1920" height="1020" alt="Screenshot 2025-07-18 142016" src="https://github.com/user-attachments/assets/d60810c6-487e-4141-817d-4559ac08b178" />




### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node package manager)
- **MongoDB** (locally installed or use **MongoDB Atlas** for cloud storage)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/madhu-maneesh/TripNest.git
