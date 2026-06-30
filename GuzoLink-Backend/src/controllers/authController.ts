import { Context } from "hono";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../database/mysql";


export const register = async (c: Context) => {
  try {
    const { fullname, email, password } = await c.req.json();

    if (!fullname || !email || !password) {
      return c.json({ message: "All fields are required" }, 400);
    }
    
    const [existing] = await pool.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );
    if ((existing as any[]).length > 0) {
      return c.json({ message: "Email is already registered" }, 409);
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)",
      [fullname, email, hashedPassword]
    ) as any;


    const token = jwt.sign(
      {
        id: result.insertId,   
        email: email,
        fullname: fullname,
      },
      process.env.JWT_SECRET as string,  
      { expiresIn: "15m" }               
    );

    return c.json({
      message: "User registered successfully",
      token,
      user: {
        id: result.insertId,
        fullname,
        email,
      },
    }, 201);

  } catch (error) {
    console.error("Register error:", error);
    return c.json({ message: "Internal server error" }, 500);
  }
};

export const login = async (c: Context) => {
  try {
    const { email, password } = await c.req.json();

    if (!email || !password) {
      return c.json({ message: "Email and password are required" }, 400);
    }

    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    const users = rows as any[];

    if (users.length === 0) {
      return c.json({ message: "Invalid email or password" }, 401);
    }

    const user = users[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return c.json({ message: "Invalid email or password" }, 401);
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        fullname: user.fullname,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    return c.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Login error:", error);
    return c.json({ message: "Internal server error" }, 500);
  }
};