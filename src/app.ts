import express from "express";
import {userRoute} from "./routes/user";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
userRoute(app);

export = app;
