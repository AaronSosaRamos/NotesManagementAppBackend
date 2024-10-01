# NotesManagementAppBackend 📝🚀

Welcome to **NotesManagementAppBackend**, a comprehensive backend solution designed for managing notes, archived notes, and categories with a RESTful API approach. This project leverages **NestJS** for its modular structure, **JWT** and **BCrypt** for secure authentication, and **PostgreSQL** via **Knex.js** for database connectivity. The backend is deployed on **Vercel**, ensuring a smooth and scalable environment. Developed by **Wilfredo Aaron Sosa Ramos**, this backend solution aims to provide a robust foundation for any note management application.

## Table of Contents 📑

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Authentication and Security](#authentication-and-security)
- [Database Integration](#database-integration)
- [Environment Configuration](#environment-configuration)
- [DTO and Entity Validation](#dto-and-entity-validation)
- [API Documentation](#api-documentation)
- [Installation Guide](#installation-guide)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Introduction 🧠

**NotesManagementAppBackend** is a feature-rich backend application designed with the **API REST** architecture in mind. Utilizing **NestJS**'s powerful dependency injection, this backend organizes functionality into multiple layers, such as Services, Repositories, DTOs, Controllers, and Modules. It supports authentication via **JWT** and **BCrypt** to ensure that user data is secure.

The backend connects to a **PostgreSQL** database through **Knex.js**, providing flexible and efficient database interactions. The app is deployed on **Vercel**, where it seamlessly integrates with an instance of PostgreSQL hosted on Vercel.

---

## Key Features 🌟

- **Notes Management**: Full CRUD operations for managing notes, including creating, updating, deleting, and retrieving notes.
- **Archived Notes**: Supports the management of archived notes, allowing users to keep track of notes that are no longer active.
- **Categories**: Supports the creation and management of categories for organizing notes.
- **Secure Authentication**: Implements **JWT** tokens for stateless authentication and **BCrypt** for secure password hashing.
- **Multiple Layers**: Organized with Service, Repository, DTO, Controller, and Module layers following NestJS best practices.
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

## Architecture 🏗️

The application follows a layered architecture to ensure modularity, maintainability, and scalability:

- **Controller**: Handles incoming HTTP requests and routes them to the appropriate services.
- **Service**: Implements the business logic of the application.
- **Repository**: Interacts with the PostgreSQL database using **Knex.js**.
- **DTO (Data Transfer Object)**: Defines the shape of the data being transferred between the client and the server.
- **Module**: Organizes different components of the application.

![Architecture Diagram](https://link-to-architecture-diagram.com)

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

### Example `.env` Configuration:

```env
DATABASE_URL=postgres://username:password@host:port/database
JWT_SECRET=your_jwt_secret
BCRYPT_SALT_ROUNDS=10
