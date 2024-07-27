import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Hellofoodie:544167As@cluster0.qhugtx7.mongodb.net/hello-foodie').then(()=>console.log("DB connected"));
}