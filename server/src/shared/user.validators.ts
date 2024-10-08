import { body } from "express-validator";

export const firstNameValidator = body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("First name must be between 2 and 50 characters")
    .matches(/^[A-Za-zÀ-ÿ\s'-]+$/)
    .withMessage(
        "First name can only contain letters, spaces, hyphens and apostrophes"
    );

export const lastNameValidator = body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Last name must be between 2 and 50 characters")
    .matches(/^[A-Za-zÀ-ÿ\s'-]+$/)
    .withMessage(
        "Last name can only contain letters, spaces, hyphens and apostrophes"
    );

export const emailValidator = body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail();

export const passwordValidator = body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/\d/)
    .withMessage("Password must contain at least one number")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character");

export const confirmPasswordValidator = body("confirmPassword").custom(
    (value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Password confirmation does not match password");
        }
        return true;
    }
);
