🛒 E-Commerce Product Explorer

🔗 Live Demo:
https://ecommerceweb-tau-flax.vercel.app/

📌 Project Overview

A minimal and responsive e-commerce web application that fetches product data from a public mock API and allows users to explore products using different views such as All Products, Best Products, and Least Products.

The project focuses on clean component-based architecture, proper API handling, and simple UI interactions without backend complexity.

🧰 Tech Stack

React (Hooks & Functional Components)

Vite

JavaScript (ES6+)

CSS

Fetch API

Vercel (Deployment)

🌐 API Used

FakeStore API

https://fakestoreapi.com/products


Product rating: rating.rate

Product price: price

✨ Features

Fetch products using HTTP requests

Display products in a responsive grid layout

Filter views:

All Products

Best Products (Top-rated)

Least Products (Lowest-rated)

Product detail modal on card click

Add to Favorites (front-end only)

Favorites count indicator

Loading indicator while fetching data

Graceful error handling

Fully responsive (mobile & desktop)

⭐ Bonus Features

Product detail modal view

Add to Favorites using React state

Real-time favorite count badge

📐 Assumptions

Best Products = Top 5 products sorted by highest rating.rate

Least Products = Bottom 5 products sorted by lowest rating.rate

Favorites are stored only in front-end state (no persistence or backend)

▶️ How to Run Locally

Clone the repository:

git clone <your-github-repo-url>


Navigate to the project directory:

cd ecommerceweb


Install dependencies:

npm install


Start the development server:

npm run dev


Open in browser:

http://localhost:5173

🚀 Deployment

The project is deployed on Vercel and fetches data directly from the public API.

🔗 Live URL:
https://ecommerceweb-tau-flax.vercel.app/
