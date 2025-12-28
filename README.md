# Timeless - Premium Jewelry E-Commerce Platform

![Timeless](https://img.shields.io/badge/Timeless-Jewelry-blueviolet)
![License](https://img.shields.io/badge/License-MIT-green)
![Node Version](https://img.shields.io/badge/Node-v16%2B-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-v9.4-blue)

> **Jewelry beyond time** - A sophisticated full-stack e-commerce web application for a premium jewelry store.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Database Setup](#database-setup)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Endpoints](#api-endpoints)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### For Customers
- 🔐 User authentication & registration
- 💍 Browse jewelry by category and collection
- 🖼️ Interactive product gallery with multiple material variants
- 🛒 Shopping cart with quantity management
- ❤️ Wishlist functionality
- 🔍 Advanced search & filtering
- 📦 Order tracking
- 💬 Customer feedback system
- 📱 Fully responsive design

### For Administrators
- 📊 Admin dashboard with quick access icons
- ➕ Add/Edit/Delete products
- 👥 User role management
- 📈 Inventory management with low stock alerts
- 💾 CSV bulk product import (future)
- 📉 Sales analytics (future)
- 💰 Order management

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with Flexbox & Grid
- **EJS** - Server-side templating
- **JavaScript** - Client-side interactivity
- **Bootstrap 4.5.2** - UI framework
- **Google Fonts** - Lora typography

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **MySQL 9.4** - Relational database
- **mysql2 3.15.3** - MySQL driver with Promise support
- **Multer 2.0.2** - File upload handling
- **express-session 1.18.2** - Session management
- **express-mysql-session 3.0.3** - MySQL session store

### Development Tools
- **Visual Studio Code** - Code editor
- **MySQL Workbench** - Database management
- **Git** - Version control
- **Nodemon 3.1.10** - Development auto-restart

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MySQL Server** (v9.4 or higher) - [Download](https://dev.mysql.com/downloads/mysql/)
- **Git** - [Download](https://git-scm.com/)
- **npm** (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/timeless.git
   cd timeless
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Create environment file**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your configuration
   # Use your actual MySQL password and credentials
   ```

## ⚙️ Configuration

### Database Setup

1. **Open MySQL Command Line or MySQL Workbench**

2. **Create the database**
   ```sql
   CREATE DATABASE timeless;
   USE timeless;
   ```

3. **Create tables** (Run the SQL schema provided in PROJECT_REPORT.md or execute the queries below)

   **Users Table:**
   ```sql
   CREATE TABLE users (
       ID INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(50) UNIQUE,
       email VARCHAR(100) UNIQUE,
       password VARCHAR(255),
       role ENUM('user', 'admin') DEFAULT 'user',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

   **Products Table:**
   ```sql
   CREATE TABLE products (
       ID INT AUTO_INCREMENT PRIMARY KEY,
       category VARCHAR(50),
       name VARCHAR(100),
       description TEXT,
       price DECIMAL(10, 2),
       material VARCHAR(50),
       quantity INT,
       imageGold VARCHAR(255),
       imageSilver VARCHAR(255),
       imageRoseGold VARCHAR(255),
       sizeRange VARCHAR(50),
       collection VARCHAR(50),
       sold INT DEFAULT 0,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

   **Cart Table:**
   ```sql
   CREATE TABLE carts (
       ID INT AUTO_INCREMENT PRIMARY KEY,
       userID INT NOT NULL,
       productID INT NOT NULL,
       quantity INT DEFAULT 1,
       added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (userID) REFERENCES users(ID) ON DELETE CASCADE,
       FOREIGN KEY (productID) REFERENCES products(ID) ON DELETE CASCADE
   );
   ```

   **Wishlist Table:**
   ```sql
   CREATE TABLE wishlists (
       wishlistID INT AUTO_INCREMENT PRIMARY KEY,
       ID INT NOT NULL,
       ProductID INT NOT NULL,
       addedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (ID) REFERENCES users(ID) ON DELETE CASCADE,
       FOREIGN KEY (ProductID) REFERENCES products(ID) ON DELETE CASCADE
   );
   ```

   **Contact Forms Table:**
   ```sql
   CREATE TABLE contactforms (
       contactID INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100),
       subject VARCHAR(200),
       message TEXT,
       submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

   **Feedback Tables:**
   ```sql
   CREATE TABLE feedback_jewelry (
       feedbackID INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100),
       rating INT,
       comment TEXT,
       submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   CREATE TABLE feedback_accessories (
       feedbackID INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100),
       rating INT,
       comment TEXT,
       submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   CREATE TABLE feedback_customer_service (
       feedbackID INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100),
       rating INT,
       comment TEXT,
       submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Update .env file**
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_actual_password
   DB_NAME=timeless
   ```

## 🏃 Running the Application

### Development Mode
```bash
cd backend
npm start
```

The server will start on `http://localhost:8000`

### With Auto-Restart (Nodemon)
```bash
cd backend
npm run dev
```

### Access the Application
- **Homepage:** http://localhost:8000/
- **Admin Login:** http://localhost:8000/auth/login (use admin account)
- **User Signup:** http://localhost:8000/auth/signup

## 📁 Project Structure

```
timeless/
├── backend/
│   ├── controllers/          # Business logic
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── timeless.js
│   │   └── user.js
│   ├── models/              # Database queries
│   │   ├── product.js
│   │   ├── cart.js
│   │   ├── user.js
│   │   ├── accessories.js
│   │   ├── contact.js
│   │   ├── wishlists.js
│   │   ├── Jewelry.js
│   │   └── customerService.js
│   ├── routes/              # API endpoints
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── timeless.js
│   │   └── user.js
│   ├── views/               # EJS templates
│   │   ├── includes/        # Reusable components
│   │   │   ├── header.ejs
│   │   │   ├── footer.ejs
│   │   │   └── adminDashboard.ejs
│   │   ├── homepage.ejs
│   │   ├── productDetail.ejs
│   │   ├── cart.ejs
│   │   ├── wishlist.ejs
│   │   ├── viewProducts.ejs
│   │   ├── addProduct.ejs
│   │   ├── editProduct.ejs
│   │   ├── changeRole.ejs
│   │   └── [other pages].ejs
│   ├── public/              # Static assets
│   │   ├── homepage.css
│   │   ├── subpages.css
│   │   ├── responsive.css
│   │   ├── 404.css
│   │   └── photos/
│   ├── utils/               # Utility functions
│   │   ├── database.js
│   │   ├── file.js
│   │   └── path.js
│   ├── images/              # Uploaded product images
│   ├── server.js            # Application entry point
│   ├── package.json         # Dependencies
│   └── .env                 # Environment variables (not in repo)
├── .gitignore               # Git ignore rules
├── .env.example             # Environment variables template
├── README.md                # This file
├── LICENSE                  # MIT License
└── PROJECT_REPORT.md        # Detailed project documentation
```

## 💻 Usage

### Create Admin Account

1. Sign up with any email at http://localhost:8000/auth/signup
2. Open MySQL and promote the user to admin:
   ```sql
   UPDATE users SET role='admin' WHERE email='your_email@example.com';
   ```

### Add Products (As Admin)

1. Login with admin account
2. Click the green **"+"** icon in the header
3. Select category or collection
4. Fill product details and upload images
5. Submit to add product

### Browse Products (As User)

1. Signup/Login as regular user
2. Browse categories or search products
3. Click "View Details" on any product
4. Add to cart or wishlist
5. Manage cart and proceed to checkout

### Manage Users (As Admin)

1. Click the **"Manage Users"** icon in admin header
2. View all users
3. Click **"Make Admin"** to promote a user

## 🖼️ Screenshots

### User Interface
- **Homepage** - Featured collections and products
- **Product Detail** - Image gallery with material variants
- **Shopping Cart** - Manage items and quantities
- **Wishlist** - Save products for later

### Admin Interface
- **Admin Dashboard** - Enhanced header with purple gradient button
- **Add Product** - Category/collection-aware form
- **Manage Products** - Grid view with stock levels
- **Manage Users** - User promotion interface

## 🔌 API Endpoints

### Authentication
- `POST /auth/signup` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user

### Products
- `GET /products/:id` - Get product details
- `GET /allProducts` - Get all products
- `GET /:category` - Get products by category
- `GET /searchProduct` - Search products
- `POST /admin/add` - Add product (admin)
- `POST /admin/editProduct/:id` - Edit product (admin)
- `POST /admin/delete-product/:id` - Delete product (admin)

### Cart
- `POST /user/cart/add/:id` - Add to cart
- `POST /user/cart/update/:id` - Update quantity
- `POST /user/cart/remove/:id` - Remove from cart
- `GET /user/cart` - View cart

### Wishlist
- `POST /user/wishlist/add/:id` - Add to wishlist
- `POST /user/wishlist/remove/:id` - Remove from wishlist
- `GET /user/wishlist` - View wishlist

### Admin
- `POST /admin/change-role` - Change user role
- `GET /admin/users` - View all users

## 🚀 Future Enhancements

- ✅ Payment gateway integration (Stripe/PayPal)
- ✅ Order tracking system
- ✅ Product reviews & ratings
- ✅ Email marketing automation
- ✅ Analytics dashboard
- ✅ Advanced filters & faceted search
- ✅ Promotional codes & flash sales
- ✅ Progressive Web App (PWA)
- ✅ Native mobile apps
- ✅ Multi-language support

See `PROJECT_REPORT.md` for detailed information about all features and future plans.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## 📞 Contact

**Project Owner:** [Your Name]  
**Email:** [your.email@example.com]  
**GitHub:** [Your GitHub Profile]

---

## 🎯 Quick Start Checklist

- [ ] Clone repository
- [ ] Install Node.js & MySQL
- [ ] Copy `.env.example` to `.env`
- [ ] Run `npm install` in backend folder
- [ ] Create MySQL database and tables
- [ ] Run `npm start` to start server
- [ ] Access http://localhost:8000
- [ ] Create admin account via signup + SQL promotion
- [ ] Add products and test shopping features

---

**Built with ❤️ for jewelry enthusiasts**
