import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"

// App config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("APi working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

// mongodb+srv://nawazuddinn:nzatmongodb@cluster0.v0ke6lk.mongodb.net/?