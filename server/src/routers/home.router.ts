import { Router } from "express";
import { helloWorld } from "../controllers/home.controller";

export const homeRouter = Router();

homeRouter.get("/", helloWorld);
