import express , { Application, Request, Response, NextFunction} from 'express';
import morgan from "morgan";
import dotenv from "dotenv";
import userRouter from "./api/user/user.router";

dotenv.config();
const app:Application = express();

app.use(morgan("dev"));
app.use("/users", userRouter);

// app start
app.listen(
    process.env.APP_PORT, 
    () => console.log(`server is running on ${process.env.APP_PORT}`)
);