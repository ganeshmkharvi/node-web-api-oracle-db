import * as user from "../controllers/user";
import express from "express";

export function userRoute(app) {
  const router = express.Router();
  router.get("/welcome", user.welcome);

  app.use('/api', router);
}
