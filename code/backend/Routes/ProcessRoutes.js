import express from "express";
import { redirecturl, shortenurl, test } from "../Controller/Processcontroller.js";


const Router = express.Router();    


Router.route("/test").post(shortenurl);
Router.route("/:urlCode").get(redirecturl)

export default Router;

