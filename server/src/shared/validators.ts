import {
    confirmPasswordValidator,
    emailValidator,
    firstNameValidator,
    lastNameValidator,
    passwordValidator,
    passwordValidatorLogin,
} from "./user.validators";

export const createUserValidator = [
    firstNameValidator,
    lastNameValidator,
    emailValidator,
    passwordValidator,
    confirmPasswordValidator,
];

export const loginUserValidator = [emailValidator, passwordValidatorLogin];
