const express=require("express");
const { connection } = require("./Config/db");
const { userRoute } = require("./Routes/userRoute");
const { flightRoute } = require("./Routes/flightRoute");
const { authenticate } = require("./Middlewares/authenticateMiddleware");
const { bookingRoute } = require("./Routes/bookingRoute");
require("dotenv").config();
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    
    res.send("Welcome to Air ticket booking System");
})

app.use("/",userRoute);
app.use("/flights",flightRoute);
app.use(authenticate);
app.use("/",bookingRoute)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log("error while connecting to DB");
        console.log(error);
    }
    console.log(`Server is running at port ${process.env.port}`)
})