# Swachgyan Backend

Welcome to the backend repository for Swachgyan, a kids learning website designed for grade 5 and 6 students. Swachgyan aims to teach children about waste segregation and management through fun, interactive, and engaging games. This project was created for the TechLeadHers 2024 competition organized by Aaviyanta Foundation in Ward-17.

## Introduction

Swachgyan is an educational platform where children can learn about the importance of waste segregation and management in an interactive manner. The backend of Swachgyan handles user authentication, game logic, and provides the necessary API services to support the frontend interface.

## Features

- **User Authentication and Authorization**: Secure user login and registration using JWT.
- **Interactive Learning Games and Quizzes**: Engaging and educational games and quizzed for children to learn about waste management.
- **API Services**: RESTful API services to manage game data and user interactions.

## Technology Stack

- **Framework**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel
- **Version Control**: Git

The backend is deployed at: [Swachgyan Backend](https://swachgyanbackend.vercel.app/)

## API Documentation

The API documentation provides detailed information about the available endpoints, request/response formats, and authentication methods.

### Authentication

- **POST** `/signup`: Register a new user.
- **POST** `/login`: User login.

### Quiz Game

- **GET** `/quizquestion`: Retrieve quiz questions.
- **POST** `/submit`: Calculate the quiz score.

### Quiz Score

- **GET** `/score`: Retrieve quiz score for a specific user.

### Drag and Drop Game

- **POST** `/play`: Submit drag and drop game results.
- **GET** `/score`: Retrieve the score for the drag and drop game.

### Contact Form

- **POST** `/submit`: Submit a contact form.

## Conclusion

Thank you for visiting the Swachgyan backend repository. We hope this project helps make learning about waste management fun and engaging for children. If you have any questions or suggestions, feel free to contact us!

Together, we can make a difference in how the next generation perceives and handles waste management.


