const router = require("express").Router();
const auth = require("../controllers/auth.controller");

router.post("/auth/register", auth.authRegister);
router.post("/auth/login", auth.authLogin);

module.exports = router;
