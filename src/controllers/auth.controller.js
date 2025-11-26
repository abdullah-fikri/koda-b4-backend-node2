const { registerModel } = require("../models/auth.model");
const { loginModel } = require("../models/auth.model");
const { validationResult } = require("express-validator");


/**
 * POST /auth/register
 * @summary register new user
 * @tags auth
 * @param {object} request.body.required - register payload
 * @example request - example payload
 * {
 *   "fullName": "Abdullah Fikri",
 *   "email": "fiki@mail.com",
 *   "password": "123"
 * }
 * @returns {object} 200 - success response
 */
function authRegister(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "validation error",
            result: errors.array()
        });
    }
    const { fullName, email, password } = req.body;
    const newUser = registerModel(fullName, email, password);

    res.status(200).json({
        success: true,
        message: "register success",
        result: newUser
    });
}

/**
 * POST /auth/login
 * @summary login user
 * @tags auth
 * @param {object} request.body.required - login payload
 * @example request - example payload
 * {
 *   "email": "fiki@mail.com",
 *   "password": "123"
 * }
 * @returns {object} 200 - login success
 * @returns {object} 400 - wrong email or password
 */
function authLogin(req, res){
    const { email, password } = req.body;
    const user = loginModel(email, password);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "validation error",
            result: errors.array()
        });
    }

    if (!user){
        return res.status(400).json({
            success: false,
            message: "wrong email or password"
        });
    }

    return res.status(200).json({
        success: true,
        message: "login success"
    });
}

module.exports = {
    authRegister,
    authLogin
};
