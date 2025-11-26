const express = require("express");

const router = require("express").Router();

router.use(require("./auth.router"));
router.use(require("./products.router"));

router.use("/up", express.static('uploads/'))
module.exports = router;
