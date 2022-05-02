import { Router } from "express";
import { body } from "express-validator";
import { signIn, signUp } from "../controllers/auth.controller.js";
import { checkDuplicateUsernameOrEmail } from "../middlewares/verifySignUp.js";


const router = Router()



router.use((req, res, next)=>{
    res.header(
        "Access-Control-Allow-Origin",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
})

router.post(
    '/signup',
    body('username').not().isEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email is required'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'), 
    checkDuplicateUsernameOrEmail,
    signUp
)
router.post(
    '/login', 
    signIn
)

export default router