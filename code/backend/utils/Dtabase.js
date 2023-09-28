import mongoose from "mongoose";


export const connectDatabase=async()=>{
    const connection =await mongoose.connect("fill it with db address")
    console.log(`MongoDB connected: ${connection.connection.host}`)
};
