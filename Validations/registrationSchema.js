const {check} = require('express-validator');

const RegistrationSchema = [
    //email validation
    check('email')
    .isEmail()
    .withMessage('Must contain valid email address')
    .notEmpty()
    .withMessage('Email is required'),
    //password validation
    check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({min:5})
    .withMessage('Passowrd must contain atleast 5 characters')
]

module.exports = RegistrationSchema;