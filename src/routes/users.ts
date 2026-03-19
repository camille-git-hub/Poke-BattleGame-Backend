import { Router } from "express";
//import { getUsers, createUser, getUser, updateUser, deleteUser} from "../controllers/index.ts";
//import { userUpdateInputSchema } from "../schemas/index.ts";
//import validateBody from "../middlewares/validateBody.ts";

const userRouter = Router();

userRouter.use((req, res, next) => {
  console.log("user router");
  next();
});

userRouter.get("/");

userRouter.get("/:id");

userRouter.put("/:id");

userRouter.delete("/:id");

export default userRouter;
