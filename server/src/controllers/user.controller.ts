import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import { Request, Response } from "express";

import prisma from "../config/prisma/db.config";

export const createUserController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            success: false,
            errors: errors.array(),
        });

        return;
    }

    const { firstName, lastName, email, password } = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                email,
                password_hash: passwordHash,
            },
        });

        res.status(201).json({
            success: true,
            data: {
                id: user.id,
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
            },
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            res.status(409).json({
                success: false,
                error: "User already exists",
            });

            return;
        }

        res.status(500).json({
            success: false,
            error,
        });
    }
};
