const {check} = require('express-validator');

const LoginSchema = [
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
]

module.exports = LoginSchema;