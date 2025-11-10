# Web_Application — React + Spring Boot (MySQL)

This project is a full-stack web application developed for a STEM system.
It allows users to **submit contact forms** and includes an **admin login system** that allows administrators to review submitted data.  
The system is built with a **React** frontend, a **Spring Boot** backend, and a **MySQL** database.

## Project Overview
The web app consists of two main parts:
- **Frontend (`stem-front/`)** — Handles user interface, login, and form submission  
- **Backend (`stem-backend/`)** — Provides RESTful APIs for login authentication and database operations  

The main purpose of this project is to build a complete full-stack system that demonstrates frontend-backend communication, database integration, user authentication, and environment-based configuration.

## Tools & Technologies
- **Frontend:** React, JavaScript, Axios  
- **Backend:** Spring Boot (Java 17), Spring Web, Spring Data JPA, Spring Security  
- **Database:** MySQL 

## Key Features

### Frontend
- **User Interface:** Built with React and styled for responsive layout  
- **Contact Form:** Users can submit their name, email, and message  
- **Login System:**  
  - Admin login form that validates credentials via backend API 
  - Unauthorized users are redirected to the login page  
- **Admin Page:**  
  - Displays all submitted contact messages retrieved from the database  
  - Admin can view details and manage data records  
- **API Communication:** Uses Axios to interact with backend REST APIs  

### Backend
- **Spring Boot RESTful APIs:**  
  - `/contact` endpoint for handling user submissions  
  - `/admin/login` endpoint for verifying admin credentials  
- **Authentication:** Simple token-based login system  
- **Database Integration:** Saves and retrieves data from MySQL using JPA  
- **CORS Configuration:** Allows secure communication with React frontend  

### Database
- MySQL database used to persist both **user submissions** and **admin credentials**  
- Separate tables for:
  - `contacts` — storing submitted form data (name, email, message)
  - `admin` — storing admin user accounts  
- Supports data retrieval for admin viewing  

## Summary
This project demonstrates:
- Building a full-stack web app using React and Spring Boot  
- Integrating a RESTful API with MySQL  
- Implementing a simple authentication system and protected admin page  
- Managing environment variables and secure configuration  
