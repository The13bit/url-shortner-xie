import mongoose from "mongoose";


export const connectDatabase=async()=>{
    const connection =await mongoose.connect("mongodb+srv://test:test@projectdatabase.0iodxd4.mongodb.net/urlshorten")
    console.log(`MongoDB connected: ${connection.connection.host}`)
};