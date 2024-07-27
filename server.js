import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./Routes/foodRoute.js";
import userRouter from "./Routes/userRoute.js";
import 'dotenv/config.js'

// aPP config

const app = express();
const port = 4000

// ?Middleware

app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api end point
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/", (req, res) => {
  res.send("Api working")
})


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})

// mongodb+srv://Hellofoodie:<password>@cluster0.qhugtx7.mongodb.net/?