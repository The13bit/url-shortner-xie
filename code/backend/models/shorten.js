import mongoose from "mongoose";



const schema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,

});

export const Shorten = mongoose.model("shortened", schema);