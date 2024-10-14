import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let token = req.header("Authorization");
        if (!token) res.status(403).json({ message: "Access Denied" });

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimStart();
        }
        console.log("Token auth", token);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Token verified auth", verified);

        next();
    } catch (error) {
        console.error("Error verifyToken", error);
        res.status(401).json({ Message: "Token d'authentication invalide" });
    }
};
