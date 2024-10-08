import {
    confirmPasswordValidator,
    emailValidator,
    firstNameValidator,
    lastNameValidator,
    passwordValidator,
} from "./user.validators";

export const createUserValidator = [
    firstNameValidator,
    lastNameValidator,
    emailValidator,
    passwordValidator,
    confirmPasswordValidator,
];
