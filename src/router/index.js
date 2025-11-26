import express from "express";
import authRouter from "./auth.router.js";
import productsRouter from "./products.router.js";

const router = express.Router();

router.use(authRouter);
router.use(productsRouter);

router.use("/up", express.static("uploads"));

export default router;
