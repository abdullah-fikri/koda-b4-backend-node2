const router = require("express").Router();

router.use(require("./auth.router"));
router.use(require("./products.router"));

module.exports = router;
