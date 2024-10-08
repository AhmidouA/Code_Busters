import { Request, Response } from "express";

export const helloWorld = async (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello world" });
};
