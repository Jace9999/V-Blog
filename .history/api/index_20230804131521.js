import express from "express"

import postRoutes from "./routes/post.js"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"

const app = express()

app.use(express.json())
app.user("/api/post", postRoutes)
app.user("/api/user", userRoutes)
app.user("/api/auth", authRoutes)

app.listen(8800,()=>{
    console.log("Connected!")
})