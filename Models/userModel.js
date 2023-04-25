
const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})

const Usermodel=mongoose.model("user",userSchema);

module.exports={
    Usermodel
}



// name: String,
//   email: String,
//   password: String