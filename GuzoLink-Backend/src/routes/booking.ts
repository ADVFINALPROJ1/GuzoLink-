import { Hono } from "hono";
import { db } from "../db";

const booking = new Hono();

// CREATE BOOKING
booking.post("/book", async (c) => {
  const body = await c.req.json();

  const { user_id, trip_id } = body;

  await db.query(
    "INSERT INTO bookings (user_id, trip_id) VALUES (?, ?)",
    [user_id, trip_id]
  );

  return c.json({ message: "Booking created" });
});

// GET USER
booking.get("/user/:id", async (c) => {
  const userId = c.req.param("id");

  const [rows] = await db.query(
    `
    SELECT 
      bookings.id as booking_id,
      trips.id as trip_id,
      trips.title,
      trips.location,
      trips.price,
      trips.days
    FROM bookings
    JOIN trips ON bookings.trip_id = trips.id
    WHERE bookings.user_id = ?
    `,
    [userId]
  );

  return c.json(rows);
});
export default booking;