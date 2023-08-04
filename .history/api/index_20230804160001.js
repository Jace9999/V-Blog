import express from "express"

import postRoutes from "./routes/post.js"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"

const app = express()

app.use(express.json())
app.use("/api/post", postRoutes)
app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.get("/test",(req,res)=>{
    res.json("it")
})
app.listen(8800,()=>{
    console.log("Connected!")
})