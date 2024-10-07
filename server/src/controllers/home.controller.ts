import { Request, Response } from "express";

export const helloWorld = async (req: Request, res: Response) => {
    res.status(200).send("Hello world");
};
