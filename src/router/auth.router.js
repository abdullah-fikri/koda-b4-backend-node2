const router = require("express").Router();
const { checkSchema } = require("express-validator");
const auth = require("../controllers/auth.controller");

router.post(
  "/auth/register",
  checkSchema({
    fullName: { isLength: {options: { min: 3 },},
      errorMessage: "Full name must be at 3 characters", },

    email: { isEmail: true,
      errorMessage: "Email is not valid", },

    password: {isLength: { options: { min: 8 },},
      errorMessage: "Password must be at 8 characters", },
  }),
  auth.authRegister
);

router.post(
  "/auth/login",
  checkSchema({email: { isEmail: true, errorMessage: "Email is not valid",},

    password: { notEmpty: true, errorMessage: "Password is required",},
  }),
  auth.authLogin
);

module.exports = router;
