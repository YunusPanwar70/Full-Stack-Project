import express from 'express';
import { registerController, loginController, testController, forgotPasswordController } from '../controllers/auth.controller.js';
import { isAdmin, requireSignIn } from '../middlewares/auth.middleware.js';

// router object
const router = express.Router();

// routing
// Register || Method POST
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

// Forgot Password || Post
router.post('/forgot-password', forgotPasswordController);

// Test Route
router.post('/test', requireSignIn, isAdmin, testController);

// protected use route
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});
// protected Admin route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});
export default router;