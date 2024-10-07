import { Router } from "express";
import { homeRouter } from "./new.router";

export const router = Router();

router.use("/api", homeRouter);
