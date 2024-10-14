import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import { loginType } from "shared/user.types";

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
            // errors Prisma P2002 (already exists)
            res.status(409).json({
                success: false,
                error: "User already exists",
            });

            return;
        }

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const loginUserController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password }: loginType = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) res.status(400).json({ message: "User does not exist" });

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) res.status(400).json({ message: "Invlaid Password" });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "2h",
        });

        res.status(201).json({
            token,
            firstName: user.first_name,
            lastName: user.last_name,
            id: user.id,
            email: user.email,
        });
    } catch (error) {
        console.error("Error login_register:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const getUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        });

        if (!user) res.status(404).json({ message: "User Not Found" });
        res.status(200).json({
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
        });
    } catch (error) {
        console.error("Error user:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
