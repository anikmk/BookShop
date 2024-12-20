# BookShop Application

## Features

- **User Accounts**: Buyers, Sellers, and Admin users with different roles and permissions.
- **Product Listings**: Buyers can browse products by categories, and Sellers can add, edit, and remove their products.
- **Shopping Cart**: Buyers can add products to their cart.
- **Wishlist**: Buyers can save products to their wishlist.
- **Admin Dashboard**: Admin View all users.
- Change user roles (e.g., promote a buyer to a seller).
-Delete any user.

## How to Run Locally

### Prerequisites

- Node.js (Version >= 16.0)
- MongoDB (for database)

### 1. Clone the repository

```bash
git clone https://github.com/anikmk/BookShop.git
cd bookshop
npm install

MONGO_URI=your_mongo_database_url
PORT=5000
JWT_SECRET=your_jwt_secret_key
** 2.Run The aplication**
npm start
------------------
User Credentials
****Buyer:
Email: buyer@gmail.com
Password: @Phase02
****Seller:
Email: seller@gmail.com
Password: @Phase02
****Admin:
Email: admin@gmail.com
Password: @Phase02

----------------
****Technologies Used****
- React for frontend
- Node.js with Express for backend
- MongoDB for database
- JWT for authentication
- Firebase for hosting
