import { Router } from "express";

import {
    createUserController,
    loginUserController,
    getUserController,
} from "../controllers/user.controller";

import { verifyToken } from "../middlewares/auth";

import { createUserValidator, loginUserValidator } from "../shared/validators";

export const userRouter = Router();

userRouter.post("/register", createUserValidator, createUserController);
userRouter.post("/login", loginUserValidator, loginUserController);
userRouter.get("/profil/:id", verifyToken, getUserController);
