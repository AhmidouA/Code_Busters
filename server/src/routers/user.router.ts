import { Router } from "express";

import {
    createUserController,
    loginUserController,
} from "../controllers/user.controller";

import { createUserValidator, loginUserValidator } from "../shared/validators";

export const userRouter = Router();

userRouter.post("/register", createUserValidator, createUserController);
userRouter.post("/login", loginUserValidator, loginUserController);
