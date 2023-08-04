import express from "express";
import { login, logout, register } from "../controllers/auth.js";

const router = express.Router()

router.get("/",(req,res)=>{
    res.json("it")
})

 router.post("/register", register)
 router.post("/login", login)
 router.post("/logout", logout)

export default router