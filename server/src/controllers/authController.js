import { Router } from "express"

const authController = Router();

authController.get('/register', (req, res) => {
    res.send('Register works!');
});

export default authController;