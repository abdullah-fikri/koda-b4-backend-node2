const { registerModel } = require("../models/auth.model");
const { loginModel } = require("../models/auth.model");

function authRegister(req, res){
    const { fullName, email, password } = req.body;
    const newUser = registerModel(fullName, email, password);

    res.status(200).json({
        success: true,
        message: "register success",
        result: newUser
    });
}

function authLogin(req, res){
    const { email, password } = req.body;
    const user = loginModel(email, password);

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
