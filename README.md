# NotesManagementAppBackend 📝🚀

Welcome to **NotesManagementAppBackend**, a comprehensive backend solution designed for managing notes, archived notes, and categories with a RESTful API approach. This project leverages **NestJS** for its modular structure, **JWT** and **BCrypt** for secure authentication, and **PostgreSQL** via **Knex.js** for database connectivity. The backend is deployed on **Vercel**, ensuring a smooth and scalable environment. Developed by **Wilfredo Aaron Sosa Ramos**, this backend solution aims to provide a robust foundation for any note management application.

## Table of Contents 📑

- [Introduction](#introduction-)
- [Key Features](#key-features-)
- [Use Cases](#use-cases-)
- [Tech Stack](#tech-stack-)
- [Authentication and Security](#authentication-and-security-)
- [Database Integration](#database-integration-)
- [Environment Configuration](#environment-configuration-)
- [API Documentation](#api-documentation-)
- [Installation Guide](#installation-guide-)
- [How to Use](#how-to-use-)
- [Contributing](#contributing-)
- [License](#license-)
- [Acknowledgments](#acknowledgments-)

---

## Introduction 🧠

**NotesManagementAppBackend** is a feature-rich backend application designed with the **API REST** architecture in mind. Utilizing **NestJS**'s powerful dependency injection, this backend organizes functionality into multiple layers, such as Services, Repositories, Controllers, and Modules. It supports authentication via **JWT** and **BCrypt** to ensure that user data is secure.

The backend connects to a **PostgreSQL** database through **Knex.js**, providing flexible and efficient database interactions. The app is deployed on **Vercel**, where it seamlessly integrates with an instance of PostgreSQL hosted on Vercel.

---

## Key Features 🌟

- **Notes Management**: Full CRUD operations for managing notes, including creating, updating, deleting, and retrieving notes.
- **Archived Notes**: Supports the management of archived notes, allowing users to keep track of notes that are no longer active.
- **Categories**: Supports the creation and management of categories for organizing notes.
- **Secure Authentication**: Implements **JWT** tokens for stateless authentication and **BCrypt** for secure password hashing.
- **Multiple Layers**: Organized with Service, Repository, Controller, and Module layers following NestJS best practices.
- **PostgreSQL Integration**: Uses **Knex.js** for database queries, offering seamless integration with PostgreSQL.
- **Swagger Documentation**: The API is fully documented using **Swagger** for easy reference and testing.
- **Environment Variables Management**: Powered by **t3-oss**, providing enhanced control over environment variables.

---

## Use Cases 🛠️

**NotesManagementAppBackend** serves various use cases:

- **Personal Note-Taking**: Allows individuals to manage their notes, archive old notes, and categorize them for better organization.
- **Team Collaboration**: Can be extended to support team-based note-taking where multiple users can manage notes and assign categories.
- **Educational Tools**: Ideal for use in learning management systems to store lecture notes, assignments, and archived information.
- **Project Management**: Can be used to track project notes, milestones, and categorize tasks for better management.

---

## Tech Stack ⚙️

This backend application is built using the following technologies:

- **NestJS** 🌐: A progressive Node.js framework for building efficient and scalable server-side applications.
- **JWT** 🔒: JSON Web Tokens used for secure, stateless authentication.
- **BCrypt** 🔑: A robust library for password hashing to enhance security.
- **Knex.js** 🔗: A SQL query builder for PostgreSQL and other relational databases.
- **PostgreSQL** 🐘: A powerful, open-source object-relational database system.
- **t3-oss** 🧩: For advanced environment variable management.
- **Swagger** 📘: Auto-generates API documentation for seamless developer interaction.
- **Vercel** 🌐: Deployment platform hosting both the backend API and PostgreSQL instance.

---

## Authentication and Security 🔐

**NotesManagementAppBackend** employs industry-standard authentication and security mechanisms:

- **JWT (JSON Web Tokens)**: Provides stateless authentication, allowing users to securely log in and manage their session tokens.
- **BCrypt**: Ensures that user passwords are hashed and stored securely in the database, reducing the risk of data breaches.
- **Middleware**: Custom middleware ensures that only authenticated users can access certain endpoints, improving the app's security.

---

## Database Integration 🐘

The application is integrated with **PostgreSQL** using **Knex.js**:

- **Knex.js**: A SQL query builder that simplifies complex queries and migrations.
- **PostgreSQL**: The database is hosted on **Vercel**, and the app is designed to handle database connections efficiently, even in a deployed environment.

### Key Database Features:

- **Notes Table**: Stores all note-related information.
- **Archived Notes Table**: Keeps track of notes that are no longer active.
- **Categories Table**: Allows for categorizing notes for better organization.

---

## Environment Configuration ⚙️

The project uses **t3-oss** to enhance the management of environment variables. This ensures that sensitive information such as database credentials, JWT secrets, and API keys are stored securely and accessed in a scalable manner.

### Environment Variables:

The following environment variables must be set in a `.env` file:

```env
NODE_ENV=development
PORT=3000

ALLOWED_UI_DOMAINS=http://localhost:3000

DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name

EMAIL=your_email
PASSWORD=your_password

JWT_SECRET=your_jwt_secret
```

These environment variables support:

- **NODE_ENV**: The environment in which the application is running (e.g., development, production).
- **PORT**: The port on which the backend will run.
- **ALLOWED_UI_DOMAINS**: Specifies which frontend domains are allowed to communicate with the backend.
- **DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE**: PostgreSQL connection details.
- **EMAIL and PASSWORD**: Credentials for email services (if applicable).
- **JWT_SECRET**: The secret used to sign and verify JWT tokens.

---

## API Documentation 📘

The API is fully documented using **Swagger**, providing a clean interface to explore the available endpoints and test them interactively.

- **Access Swagger Docs**: Once the application is running, you can view the Swagger documentation at `/api/docs`.

---

## Installation Guide 🛠️

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (local or remote instance)

### Installation Steps

1. **Clone the repository**:
    bash
    git clone https://github.com/yourusername/NotesManagementAppBackend.git
    
2. **Navigate to the project directory**:
    bash
    cd NotesManagementAppBackend
    
3. **Install dependencies**:
    bash
    npm install
    
4. **Set up the environment variables**:
    - Create a `.env` file in the root of the project and add the necessary environment variables.
5. **Run database migrations**:
    bash
    npx knex migrate:latest
    
6. **Start the server**:
    bash
    npm run start:dev
    

---

## How to Use 🤖

Once you've set up the project, you can start managing your notes, archived notes, and categories through the API. Here are some example endpoints:

### Notes

- **Create a Note**: `POST /notes`
- **Retrieve All Notes**: `GET /notes`
- **Update a Note**: `PUT /notes/:id`
- **Delete a Note**: `DELETE /notes/:id`

### Archived Notes

- **Retrieve All Archived Notes**: `GET /notes/archived`

### Categories

- **Create a Category**: `POST /categories`
- **Retrieve All Categories**: `GET /categories`

All endpoints are secured by **JWT**, so ensure you're authenticated before making requests.

---

## Contributing 🤝

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push the changes (`git push origin feature-branch`).
5. Create a pull request for review.

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Acknowledgments 🙏

A special thanks to the **NestJS**, **Knex.js**, **PostgreSQL**, and **Swagger** communities for their invaluable tools and support. This project wouldn't have been possible without the fantastic open-source tools they provide.

---

Made by: **Wilfredo Aaron Sosa Ramos** 💻
