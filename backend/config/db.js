import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://nawazuddinn:nzatmongodb@cluster0.v0ke6lk.mongodb.net/Food').then(()=>console.log("DB connected"));
}

