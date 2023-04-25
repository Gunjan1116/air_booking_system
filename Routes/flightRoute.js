const express=require("express");
const { Flightmodel } = require("../Models/flightModel");
require("dotenv").config();

const flightRoute=express.Router();
///api/flights-get
///api/flights/:id-get
///api/flights-post
///api/flights/:id-patch
///api/flights/:id-delete
flightRoute.get("/",async(req,res)=>{
    try {
       const reqData=await Flightmodel.find();
       res.status(200).json({"msg":"All flight data","data":reqData}) 
    } catch (error) {
        console.log("error while getting all flight data");
        console.log(error);
        res.json({"msg":"error while getting all flight data","error":error})
    }
})
flightRoute.get("/:id",async(req,res)=>{
    const ID=req.params.id;
    try {
       const reqData=await Flightmodel.find({_id:ID});
       res.status(200).json({"msg":` flight data of id ${ID}`,"data":reqData}) 
    } catch (error) {
        console.log("error while getting a paticular flight data");
        console.log(error);
        res.json({"msg":"error while getting a paticular flight data","error":error})
    }
})
flightRoute.post("/",async(req,res)=>{
  const  payload=req.body;
    try {
       const reqData=new Flightmodel(payload);
       await reqData.save();
       res.status(201).json({"msg":"new flight data added successfully"}) 
    } catch (error) {
        console.log("error while adding flight data");
        console.log(error);
        res.json({"msg":"error while adding flight data","error":error})
    }
})
flightRoute.patch("/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    try {
      const reqData= await Flightmodel.findByIdAndUpdate({_id:ID},payload);
       res.status(204).json({"msg":`flight data of id ${ID} updated successfully`}) 
    } catch (error) {
        console.log("error while updating flight data");
        console.log(error);
        res.json({"msg":"error while updating flight data","error":error})
    }
})
flightRoute.delete("/:id",async(req,res)=>{
    const ID=req.params.id;
    
    try {
       const reqData=await Flightmodel.findByIdAndDelete({_id:ID});
       res.status(202).json({"msg":`flight data of id ${ID} deleted successfully`}) 
    } catch (error) {
        console.log("error while deleteing flight data");
        console.log(error);
        res.json({"msg":"error while deleteing flight data","error":error})
    }
})

module.exports={
    flightRoute
}

// "airline": "air india",
//   "flightNo": "123",
//   "departure": "even",
//   "arrival": "mor",
//   "departureTime": "2020-11-01",
//   "arrivalTime": "2020-12-02",
//   "seats": 200,
//   "price": 2000