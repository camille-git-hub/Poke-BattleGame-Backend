import { Router } from "express";
//import { register, login, refresh, logout, profile } from "../controllers/auth.ts";
//import authenticate from "../middlewares/authenticate.ts";

const authRouter = Router();

authRouter.post("/register");

authRouter.post("/login");

//authRouter.post("/refresh"); ???

authRouter.delete("/logout");

authRouter.get("/profile");

export default authRouter;
