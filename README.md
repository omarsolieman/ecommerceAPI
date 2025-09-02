# E-Commerce REST API

A robust and scalable backend API for a modern e-commerce platform.
This project is built with **Node.js** and **Express**, utilizing **MongoDB** for data persistence.
It includes essential features like user authentication, product management, a shopping cart system, order processing, and payment integration with Stripe.

---

## ✨ Features

* **User Authentication**: Secure user registration and login functionality using **JSON Web Tokens (JWT)** for session management. Passwords are securely hashed with **bcrypt**.
* **Product Management**: Full CRUD (Create, Read, Update, Delete) capabilities for products, allowing admins to manage the store's inventory.
* **Shopping Cart**: Complete cart functionality for users to add, update, remove, and view items.
* **Order Management**: Allows users to place orders from their cart and view their order history. Admins can view and manage all user orders.
* **Secure Payment Processing**: Integrated with the **Stripe API** to handle payments securely and efficiently.
* **Role-Based Access Control**: Middleware to protect routes and differentiate between regular users and administrators, ensuring secure access to sensitive operations.

---

## 🛠️ Tech Stack

* **Backend Framework**: Node.js with Express.js
* **Database**: MongoDB with Mongoose as the ODM
* **Authentication**: JSON Web Token (JWT)
* **Password Hashing**: bcrypt.js
* **Payment Gateway**: Stripe
* **Environment Variables**: dotenv

---

## 🚀 Getting Started

To get a local copy up and running, please follow these simple steps.

### **Prerequisites**

Make sure you have **Node.js** and **MongoDB** installed on your machine:

* [Node.js](https://nodejs.org/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

---

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/omarsoileman/your-repo-name.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd your-repo-name
   ```

3. **Install NPM packages**

   ```bash
   npm install
   ```

4. **Set up Environment Variables**
   Create a `.env` file in the root directory of the project and add the following variables. Replace the placeholder values with your actual credentials:

   ```env
   # MongoDB Connection String
   MONGO_URL=mongodb://localhost:27017/ecommerce_db

   # JWT Secret Keys
   JWT_SEC=your_jwt_secret_key
   PASS_SEC=your_password_hashing_secret

   # Stripe API Secret Key
   STRIPE_KEY=your_stripe_secret_key
   ```

5. **Start the Server**

   ```bash
   npm start
   ```

The server will start on **[http://localhost:5000](http://localhost:5000)** (or your configured port).

---

## 📝 API Endpoints

### **Authentication** (`/api/auth`)

| Method | Endpoint  | Description             | Access |
| ------ | --------- | ----------------------- | ------ |
| POST   | /register | Register a new user     | Public |
| POST   | /login    | Log in an existing user | Public |

---

### **Users** (`/api/users`)

| Method | Endpoint | Description            | Access      |
| ------ | -------- | ---------------------- | ----------- |
| GET    | /\:id    | Get a user by their ID | Admin       |
| GET    | /        | Get all users          | Admin       |
| PUT    | /\:id    | Update user details    | Owner/Admin |
| DELETE | /\:id    | Delete a user account  | Owner/Admin |

---

### **Products** (`/api/products`)

| Method | Endpoint | Description                   | Access |
| ------ | -------- | ----------------------------- | ------ |
| POST   | /        | Create a new product          | Admin  |
| GET    | /\:id    | Get a single product by ID    | Public |
| GET    | /        | Get all products (filterable) | Public |
| PUT    | /\:id    | Update a product's details    | Admin  |
| DELETE | /\:id    | Delete a product              | Admin  |

---

### **Cart** (`/api/carts`)

| Method | Endpoint       | Description                | Access      |
| ------ | -------------- | -------------------------- | ----------- |
| POST   | /              | Create a new cart for user | User        |
| GET    | /find/\:userId | Get a user's cart          | Owner/Admin |
| GET    | /              | Get all carts              | Admin       |
| PUT    | /\:id          | Update items in a cart     | Owner/Admin |
| DELETE | /\:id          | Delete a cart              | Owner/Admin |

---

### **Orders** (`/api/orders`)

| Method | Endpoint       | Description               | Access      |
| ------ | -------------- | ------------------------- | ----------- |
| POST   | /              | Create a new order        | User        |
| GET    | /find/\:userId | Get all orders for a user | Owner/Admin |
| GET    | /              | Get all orders from users | Admin       |
| PUT    | /\:id          | Update an order's status  | Admin       |
| DELETE | /\:id          | Delete an order           | Admin       |

---

### **Stripe Checkout** (`/api/stripe`)

| Method | Endpoint | Description                  | Access |
| ------ | -------- | ---------------------------- | ------ |
| POST   | /payment | Process a payment via Stripe | User   |

---

👉 Do you want me to **add a Table of Contents and badges (Node.js, Express, MongoDB, Stripe, JWT)** to make it look like a professional open-source README?
