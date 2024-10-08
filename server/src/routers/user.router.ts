import { Router } from "express";

import { createUserController } from "../controllers/user.controller";

import { createUserValidator } from "../shared/validators";

export const userRouter = Router();

userRouter.post("/", createUserValidator, createUserController);
