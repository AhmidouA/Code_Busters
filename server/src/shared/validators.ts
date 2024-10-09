import {
    confirmPasswordValidator,
    emailValidator,
    firstNameValidator,
    lastNameValidator,
    passwordValidator,
    emailValidatorLogin,
    passwordValidatorLogin,
} from "./user.validators";

export const createUserValidator = [
    firstNameValidator,
    lastNameValidator,
    emailValidator,
    passwordValidator,
    confirmPasswordValidator,
];

export const loginUserValidator = [emailValidatorLogin, passwordValidatorLogin];
