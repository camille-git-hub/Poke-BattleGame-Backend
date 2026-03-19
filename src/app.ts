import express from "express";
import cookieParser from "cookie-parser";
import "./db/index.ts";
import { userRouter, authRouter } from "./routes/index.ts";
import { errorHandler } from "./middlewares/errorHandler.ts";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date()}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRouter);
app.use("/auth", authRouter);

app.use("*splat", (req, res, next) => {
  throw new Error("Not Found");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
