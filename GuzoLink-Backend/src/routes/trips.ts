

import { Hono } from "hono";
import { getAllTrips } from "../controllers/tripController";


const tripRouter = new Hono();


tripRouter.get("/", getAllTrips);

export default tripRouter;