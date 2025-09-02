# 🛒 E-Commerce REST API

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)](https://www.mongodb.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-blueviolet?logo=stripe)](https://stripe.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-orange?logo=jsonwebtokens)](https://jwt.io/)

A robust and scalable **REST API** for a modern e-commerce platform built with **Node.js**, **Express**, and **MongoDB**.
Includes features like authentication, product management, shopping cart, order processing, and secure Stripe payments.

---

## 📚 Table of Contents

* [✨ Features](#-features)
* [🛠️ Tech Stack](#️-tech-stack)
* [🚀 Getting Started](#-getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [📝 API Endpoints](#-api-endpoints)

  * [Authentication](#authentication)
  * [Users](#users)
  * [Products](#products)
  * [Cart](#cart)
  * [Orders](#orders)
  * [Stripe Checkout](#stripe-checkout)

---

## ✨ Features

* **User Authentication**: Secure registration and login using **JWT** with hashed passwords.
* **Product Management**: Full **CRUD** for products (admins only).
* **Shopping Cart**: Add, update, remove, and view items.
* **Order Management**: Place orders, view history, and manage all orders (admins).
* **Secure Payments**: Integrated with **Stripe** for secure transactions.
* **Role-Based Access Control**: Middleware for route protection and access levels.

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB + Mongoose
* **Authentication**: JWT
* **Password Hashing**: bcrypt.js
* **Payment Gateway**: Stripe
* **Environment Variables**: dotenv

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

---

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/omarsoileman/your-repo-name.git
   ```
2. **Navigate to the project folder**

   ```bash
   cd your-repo-name
   ```
3. **Install dependencies**

   ```bash
   npm install
   ```
4. **Set up environment variables**
   Create a `.env` file in the root folder:

   ```env
   # MongoDB Connection
   MONGO_URL=mongodb://localhost:27017/ecommerce_db

   # JWT Secret Keys
   JWT_SEC=your_jwt_secret_key
   PASS_SEC=your_password_hashing_secret

   # Stripe Secret Key
   STRIPE_KEY=your_stripe_secret_key
   ```
5. **Start the server**

   ```bash
   npm start
   ```

   Server runs at **[http://localhost:5000](http://localhost:5000)** (or your custom port).

---

## 📝 API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint  | Description             | Access |
| ------ | --------- | ----------------------- | ------ |
| POST   | /register | Register a new user     | Public |
| POST   | /login    | Log in an existing user | Public |

---

### Users (`/api/users`)

| Method | Endpoint | Description           | Access      |
| ------ | -------- | --------------------- | ----------- |
| GET    | /\:id    | Get user by ID        | Admin       |
| GET    | /        | Get all users         | Admin       |
| PUT    | /\:id    | Update user details   | Owner/Admin |
| DELETE | /\:id    | Delete a user account | Owner/Admin |

---

### Products (`/api/products`)

| Method | Endpoint | Description                   | Access |
| ------ | -------- | ----------------------------- | ------ |
| POST   | /        | Create a new product          | Admin  |
| GET    | /\:id    | Get a single product by ID    | Public |
| GET    | /        | Get all products (filterable) | Public |
| PUT    | /\:id    | Update product details        | Admin  |
| DELETE | /\:id    | Delete a product              | Admin  |

---

### Cart (`/api/carts`)

| Method | Endpoint       | Description                | Access      |
| ------ | -------------- | -------------------------- | ----------- |
| POST   | /              | Create a new cart for user | User        |
| GET    | /find/\:userId | Get a user's cart          | Owner/Admin |
| GET    | /              | Get all carts              | Admin       |
| PUT    | /\:id          | Update items in a cart     | Owner/Admin |
| DELETE | /\:id          | Delete a cart              | Owner/Admin |

---

### Orders (`/api/orders`)

| Method | Endpoint       | Description               | Access      |
| ------ | -------------- | ------------------------- | ----------- |
| POST   | /              | Create a new order        | User        |
| GET    | /find/\:userId | Get all orders for a user | Owner/Admin |
| GET    | /              | Get all orders            | Admin       |
| PUT    | /\:id          | Update an order's status  | Admin       |
| DELETE | /\:id          | Delete an order           | Admin       |

---

### Stripe Checkout (`/api/stripe`)

| Method | Endpoint | Description                | Access |
| ------ | -------- | -------------------------- | ------ |
| POST   | /payment | Process payment via Stripe | User   |

---
