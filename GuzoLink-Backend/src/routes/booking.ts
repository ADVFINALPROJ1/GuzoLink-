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

// GET USER BOOKINGS
booking.get("/user/:id", async (c) => {
  const userId = c.req.param("id");

  const [rows] = await db.query(
    "SELECT * FROM bookings WHERE user_id = ?",
    [userId]
  );

  return c.json(rows);
});

export default booking;