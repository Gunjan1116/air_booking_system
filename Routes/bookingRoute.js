const express=require("express");
const { Bookingmodel } = require("../Models/bookingModel");
require("dotenv").config();

const bookingRoute=express.Router();

///api/booking-post
///api/dashboard-get

bookingRoute.post("/booking",async(req,res)=>{
    let payload=req.body;
    try {
        const reqData=new Bookingmodel(payload);
       await reqData.save();
       res.status(201).json({"msg":"new booking added successfully"}) 
    } catch (error) {
        console.log("error while booking");
        console.log(error);
        res.json({"msg":"error while booking","error":error})
    }
})
bookingRoute.get("/dashboard",async(req,res)=>{
    
    try {
        const reqData=await Bookingmodel.find();
        res.status(200).json({"msg":"All booking data","data":reqData})  
    } catch (error) {
        console.log("error while getting all booking");
        console.log(error);
        res.json({"msg":"error while getting all booking","error":error})
    }
})

module.exports={
    bookingRoute
}