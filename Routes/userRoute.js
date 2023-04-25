const express=require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { Usermodel } = require("../Models/userModel");
require("dotenv").config();

const userRoute=express.Router();

userRoute.post("/register",async(req,res)=>{
    const payload=req.body;
    try {
       const reqData= await Usermodel.find({email:payload.email});
       if(reqData.length>0){
        return res.json({"msg":"You are already register"})
       }
       bcrypt.hash(payload.password, 5, async function(err, hash) {
        // Store hash in your password DB.
        if(err){
            console.log("error while hashing password",err)
            return res.json({"msg":"error while hashing password"})
        }
        const addData= new Usermodel({name:payload.name,email:payload.email,password:hash})
        await addData.save();
        res.status(201).json({"msg":"User register Successfully"})
    });
       
    } catch (error) {
        console.log("error while adding new user");
        console.log(error);
        res.json({"msg":"error while adding new user","error":error})
    }
})

userRoute.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        let reqData=await Usermodel.find({email});
        if(reqData.length==0){
            return res.json({"msg":"Please register first"})
        }else{
            bcrypt.compare(password, reqData[0].password,async function(err, result) {
                if(result){
                    var token=jwt.sign({userId:reqData[0]._id},process.env.key);
                    res.status(201).json({"msg":"login success","token":token})
                }else{
                    res.json({"msg":"wrong credentials"})
                }
                
            });
        }
    } catch (error) {
        console.log("error while login user");
        console.log(error);
        res.json({"msg":"error while login user","error":error})
    }
})

module.exports={
    userRoute
}