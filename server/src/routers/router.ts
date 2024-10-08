import { Router } from "express";
import { homeRouter } from "./home.router";
import { userRouter } from "./user.router";
export const router = Router();

router.use("/api", homeRouter);
router.use("/api/user", userRouter);
