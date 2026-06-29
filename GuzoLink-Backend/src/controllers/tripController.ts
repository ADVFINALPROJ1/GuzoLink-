

import { Context } from "hono";
import pool from "../database/mysql";


export const getAllTrips = async (c: Context) => {
  try {
    
    const [rows] = await pool.query("SELECT * FROM trips");

    return c.json({ trips: rows });
  } catch (error) {
    console.error("Get trips error:", error);
    return c.json({ message: "Internal server error" }, 500);
  }
};