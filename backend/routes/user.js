import express from 'express';
const router=express.Router();
import { loginUser,signUser } from '../controllers/usercontroller.js';


router.post('/signup',signUser)
router.post('/login1',loginUser)



export default router;