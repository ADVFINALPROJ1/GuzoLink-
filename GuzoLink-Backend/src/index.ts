import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import authRouter from "./routes/auth";
import tripRouter from "./routes/trips";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:5173", 
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.route("/auth", authRouter);   
app.route("/trips", tripRouter);  


app.get("/", (c) => {
  return c.json({ message: "GuzoLink API is running! 🌍" });
});

const PORT = Number(process.env.PORT) || 3000;

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`GuzoLink backend running http://localhost:${PORT}`);
});