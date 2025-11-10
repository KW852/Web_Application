# Web_Application — React + Spring Boot (MySQL)

This project is a full-stack web application developed for a STEM system.  
It allows users to submit contact forms through a **React** frontend, which communicates with a **Spring Boot** backend connected to a **MySQL** database.

---

## 💡 Project Overview
The web app consists of two main parts:
- **Frontend (`stem-front/`)** — Handles user interface and form submission  
- **Backend (`stem-backend/`)** — Provides RESTful APIs and connects to the MySQL database  

The main purpose of this project is to build a simple yet complete full-stack system that demonstrates frontend-backend communication, database integration, and environment-based configuration.

---

## ⚙️ Tools & Technologies
- **Frontend:** React, JavaScript, Axios  
- **Backend:** Spring Boot (Java 17), Spring Web, Spring Data JPA  
- **Database:** MySQL  

---

## 🧩 Key Features
### Frontend
- User-friendly web interface built with React  
- Contact form where users can enter their name, email, and message  
- Data submission through Axios to backend REST API  
- Input validation and form feedback  

### Backend
- Spring Boot RESTful API for handling POST/GET requests  
- Stores form data (first name, last name, email, message) into MySQL database  
- Includes error handling and response status codes  
- CORS enabled for local frontend-backend communication  

### Database
- MySQL used to persist user submissions  
- Table created to store contact form data  
- Supports data retrieval for admin review  
