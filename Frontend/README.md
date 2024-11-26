# 🎃 Spooky Trivia Game 🎃

A spooky-themed trivia game where users can answer trivia questions with multiple-choice answers. The application includes a frontend built with React (using Vite), a backend with Node.js (Express), and MongoDB for data storage. The project demonstrates full-stack development with modern technologies.

----------

## Features

-   **Trivia Gameplay**: Users can view a trivia question and answer it by selecting one of the multiple-choice options.
-   **Admin Management**: Admins can create, update, and delete trivia questions via API endpoints.
-   **Dynamic Data Handling**: Questions and answers are stored in MongoDB and retrieved dynamically.
-   **Error Handling**: Frontend and backend handle invalid inputs and server errors gracefully.

----------

## Tech Stack

### Frontend

-   **React**: For building the user interface.
-   **Vite**: A fast development build tool for React.
-   **Axios**: For making API requests to the backend.
-   **Bootstrap**: For styling and layout.

### Backend

-   **Node.js**: JavaScript runtime for building the server.
-   **Express**: Web framework for creating RESTful API endpoints.
-   **Mongoose**: For working with MongoDB.

### Database

-   **MongoDB**: NoSQL database for storing questions and answers.

### Additional Tools

-   **dotenv**: For managing environment variables.
-   **Nodemon**: For automatic server restarts during development.

----------

## File Structure

### Backend


`spooky-trivia-backend/
├── models/
│   └── Question.mjs  # MongoDB schema for questions
├── routes/
│   └── questionRoutes.mjs  # API routes for question management
├── server.mjs         # Express server setup
├── .env               # Environment variables
├── package.json       # Backend dependencies
└── README.md          # Documentation`

### Frontend


`spooky-trivia-frontend/
├── src/
│   ├── components/
│   │   ├── Question.jsx       # Displays questions with multiple-choice options
│   │   ├── AddQuestion.jsx    # Admin UI for adding questions
│   ├── utilities/
│   │   └── api.jsx            # API client using Axios
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Vite entry point
├── public/
│   └── index.html             # Root HTML file
├── .env                       # Environment variables for frontend
├── package.json               # Frontend dependencies
└── README.md                  # Documentation`

----------

## Setup and Installation

### Prerequisites

-   Node.js installed (v16 or later recommended).
-   MongoDB instance running locally or in the cloud.
-   Package manager (npm or yarn).

### Backend

1.  Clone the repository and navigate to the backend directory:


    `git clone <repository-url>
    cd spooky-trivia-backend`

2.  Install dependencies:



    `npm install`

3.  Create a `.env` file and add your MongoDB URI:



    `MONGO_URI=mongodb://localhost:27017/spooky-trivia`

4.  Start the server:


    `npm run dev`

    The backend will be available at `http://localhost:3001`.


----------

### Frontend

1.  Navigate to the frontend directory:



    `cd spooky-trivia-frontend`

2.  Install dependencies:


    `npm install`

3.  Create a `.env` file and add your API base URL:



    `VITE_API_BASE_URL=http://localhost:3000/api/questions`

4.  Start the development server:


    `npm run dev`

    The frontend will be available at `http://localhost:3000`.


----------

## API Endpoints

### **Base URL**: `http://localhost:3001/api/questions`

Method

Endpoint

Description

Request Body

GET

`/`

Fetch all questions

None

POST

`/`

Add a new question

`{ question, options, answer }`

PUT

`/:id`

Update an existing question

`{ question, options, answer }`

DELETE

`/:id`

Delete a question

None

----------

## Features Breakdown

### Backend

-   **Mongoose Schema**:

    `const questionSchema = new mongoose.Schema({
        question: { type: String, required: true, unique: true },
        options: { type: [String], required: true },
        answer: { type: String, required: true },
    });`

-   API endpoints to fetch, create, update, and delete questions.
-   Prevents duplicate questions using `unique: true` in the schema.

### Frontend

-   **Question.jsx**: Displays a trivia question and its multiple-choice options. Keeps track of the user’s selection and triggers a callback to check the answer.

-   **AddQuestion.jsx**: A simple form for admins to add new trivia questions.

-   **API Client (`api.jsx`)**: Manages communication with the backend using Axios.


----------

## Troubleshooting

### Common Issues

1.  **Duplicate Questions in the Database**:

    -   Use this MongoDB query to identify duplicates:

        `db.questions.aggregate([
            { $group: { _id: "$question", count: { $sum: 1 }, ids: { $push: "$_id" } } },
            { $match: { count: { $gt: 1 } } }
        ]);`

    -   Delete duplicates:
        `db.questions.deleteMany({ _id: { $in: duplicateIds } });`

2.  **Frontend Axios Network Errors**:

    -   Ensure the backend is running on the correct port.
    -   Check that the `VITE_API_BASE_URL` in the frontend `.env` matches the backend URL.
3.  **Schema Validation Errors**:

    -   Ensure all required fields (`question`, `options`, `answer`) are included when sending requests.

----------

## Future Improvements

-   Add authentication for admin actions (e.g., adding or deleting questions).
-   Include categories or difficulty levels for questions.
-   Allow users to track their scores over multiple questions.
-   Deploy the app using services like Heroku (backend) and Netlify (frontend).

----------

## Acknowledgments

-   Built using [React](https://reactjs.org/), [Express](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/).

----------
