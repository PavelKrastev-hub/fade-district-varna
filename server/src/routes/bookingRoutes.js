import express from "express";
import { createBooking } from "../controllers/bookingController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/booking", authMiddleware, createBooking);

export default router;