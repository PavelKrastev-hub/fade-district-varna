import { Router } from "express";
import { register } from "../services/authService.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.send('Register page!')
});

authController.post('/register', register);

export default authController;