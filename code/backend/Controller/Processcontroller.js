import { catchAsyncError } from "../middleware/CatchAsyncError.js";
import { Shorten } from "../models/shorten.js";
import { nanoid } from "nanoid";

import ErrorHandler from "../middleware/ErrorHandler.js";

export const test=catchAsyncError(async (req,res,next)=>{
    const urlCode=req.params.urlCode;
   const check=await Shorten.find({urlCode})
   if(check){
      res.json({success:true,check});
   }
   else{
      res.json({success:false,message:"DNE"});
   }
    
});

export const shortenurl=catchAsyncError(async(req,res,next)=>{
   const {longUrl}=req.body;

   const baseurl="http://localhost:3333/process";
   if(!longUrl){
      return next(new ErrorHandler("Please provide a url",400));
   }
   const existing=await Shorten.findOne({longUrl});
   
   if(existing){
      res.json({success:true,shortenurl:existing.shortUrl});
   }
   else{
      const urlcode=nanoid(10);
      while(await Shorten.findOne({urlcode})){
         urlcode=nanoid(10);
      }

      const shortUrl=baseurl+"/"+urlcode;
      await Shorten.create({urlCode:urlcode,longUrl,shortUrl});

      res.json({success:true,shortenurl:shortUrl});

   }
      
})

export const redirecturl=catchAsyncError(async(req,res,next)=>{
   const urlCode=req.params.urlCode;
   console.log(urlCode);

   if(!urlCode){
      return next(new ErrorHandler("Please provide a url",400));

   }

   const urlfind=await Shorten.findOne({urlCode})

   if(!urlfind){
      return next(new ErrorHandler("Url doesnot exist",400));

   }
   else{
      res.redirect(urlfind.longUrl);
   }

})