const mongoose=require("mongoose");


const flightSchema=mongoose.Schema({
    airline:{type:String,require:true},
    flightNo:{type:String,require:true},
    departure:{type:String,require:true},
    departureTime:{type:Date,require:true},
    arrivalTime:{type:Date,require:true},
    seats:{type:Number,require:true},
    price:{type:Number,require:true}
})

const Flightmodel=mongoose.model("flight",flightSchema);

module.exports={
    Flightmodel
}




// airline: String,
//   flightNo: String,
//   departure: String,
//   arrival: String,
//   departureTime: Date,
//   arrivalTime: Date,
//   seats: Number,
//   price: Number