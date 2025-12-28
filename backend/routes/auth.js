import express from "express";
import { getLogin,getSignup,postLogin,postLogout,postSignup } from "../controllers/auth.js";
const router = express.Router();





router.get("/signup", getSignup); 

router.get("/login", getLogin); 



router.post("/signup", postSignup);





router.post("/login", postLogin);


router.post("/logout", postLogout);

export default router;