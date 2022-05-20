import { verifyToken } from "../middleware/auth"; 
import * as user from "../controllers/user";
import express from "express";

export function userRoute(app) {
  const router = express.Router();
  router.get("/welcome", verifyToken, user.welcome);

  app.use('/api', router);
}
