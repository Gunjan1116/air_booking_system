const mongoose=require("mongoose");


const bookingSchema=mongoose.Schema({
    user:{type:String,require:true},
    flight:{type:String,require:true}
})

const Bookingmodel=mongoose.model("booking",bookingSchema);

module.exports={
    Bookingmodel
}



// user : { type: ObjectId, ref: 'User' },
//  flight : { type: ObjectId, ref: 'Flight' }