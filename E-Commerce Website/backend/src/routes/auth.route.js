import express from 'express';
import { registerController, loginController, testController } from '../controllers/auth.controller.js';
import { isAdmin, requireSignIn } from '../middlewares/auth.middleware.js';
// router object
const router = express.Router();

// routing
// Register || Method POST
router.post('/register', registerController);
// LOGIN || POST
router.post('/login', loginController);
// Test Route
router.post('/test', requireSignIn, isAdmin, testController);

export default router;