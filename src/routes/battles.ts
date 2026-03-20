import { Router } from "express";

const userRouter = Router();

userRouter.use((req, res, next) => {
  console.log("user router");
  next();
});

userRouter.post("/battles");

userRouter.get("/battles/:id");

export default userRouter;
