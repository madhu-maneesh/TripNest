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
Homepage of the TripNest:

<img width="1920" height="1020" alt="Screenshot 2025-07-18 141903" src="https://github.com/user-attachments/assets/8e722ac6-f8ef-4442-b0c4-6134a5bdbcda" />

All Listings or Explore function:


<img width="1920" height="1020" alt="Screenshot 2025-07-18 141918" src="https://github.com/user-attachments/assets/ea93e94d-06f9-4c79-b1f3-f0538f427f93" />

Authentication Page:

<img width="1920" height="1020" alt="Screenshot 2025-07-18 141937" src="https://github.com/user-attachments/assets/172d38b0-174d-44fa-88b0-db916f02eea6" />


Create or add a new Listings:

<img width="1920" height="1020" alt="Screenshot 2025-07-18 142016" src="https://github.com/user-attachments/assets/656725f8-ca51-4c43-9453-06fd3e8c4318" />


Show Listings/view:

<img width="1920" height="1020" alt="Screenshot 2025-07-18 143615" src="https://github.com/user-attachments/assets/67eac1d7-7e3f-4431-a347-84a0b6c3cf59" />

Edit Listings:

<img width="1920" height="1020" alt="Screenshot 2025-07-18 143733" src="https://github.com/user-attachments/assets/2ea36830-68a9-4b7a-9695-28c5cf037eaa" />


### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node package manager)
- **MongoDB** (locally installed or use **MongoDB Atlas** for cloud storage)

###Future Scope 
-**Need to add a payment gate way so that users can access for the payment**
-**Smart Filtering & Search: Integrate AI to suggest properties based on user preferences, budget, and travel history.**

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/madhu-maneesh/TripNest.git
   
