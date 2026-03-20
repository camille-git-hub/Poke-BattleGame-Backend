import { Router } from "express";

const userRouter = Router();

userRouter.use((req, res, next) => {
  console.log("user router");
  next();
});

userRouter.post("/teams");

userRouter.get("/teams/:id");

userRouter.put("/teams/:id");

userRouter.delete("/teams/:id");

export default userRouter;
    