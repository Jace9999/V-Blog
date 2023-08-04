import express from "express";

const router = express.Router()

app.get("/test",(req,res)=>{
    res.json("it")
})

export default router