import express from "express"

import postRoutes from "./routes/post.js"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"

const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(8800,()=>{
    console.log("Connected!")
})