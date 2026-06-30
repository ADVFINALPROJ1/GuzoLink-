# GuzoLink

GuzoLink is a travel booking web application where users can browse destinations, book trips, and view their bookings and profile.

# Features

- Browse travel destinations
- Search and filter trips
- View trip details
- Book trips (no payment system, simulated booking)
- View booked trips in "My Trips" page
- View user profile with booking summary
- Backend API with MySQL JOIN queries

# Tech Stack

Frontend:
- React (TypeScript)
- React Router DOM
- CSS
- Fetch API

Backend:
- Hono (Node.js framework)
- MySQL (XAMPP/local server)

# Setup

##Backend
npm install
npm run dev

## Frontend
npm install
npm run dev


# API Endpoints

POST /book/book → create booking

GET /book/user/:id → get user bookings with trip details

GET /user/:id → get user profile + booking count

GET /trips → get all available trips

# Pages

## Destinations
Browse all trips, search, and book trips

## Trip Details
View full trip information and book

## Trips (My Bookings)
Shows trips booked by the logged-in user

## Profile
Shows user info and total bookings


# Notes
- User ID is hardcoded as 1
- No payment system (bookings are simulated)

---

# Future Improvements
- Replace hardcoded user ID with real session system
- Add cancel booking feature
- Improve UI responsiveness
- Add admin dashboard
- Add real payment integration
