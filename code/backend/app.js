import express from "express";
import Router from "./Routes/ProcessRoutes.js";
import ErrorMiddleware from "./middleware/Error.js";
import cors from "cors";



//middleware
const app=  express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//routes
app.use("/process",Router)


export default app;

app.use(ErrorMiddleware);