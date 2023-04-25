const jwt=require("jsonwebtoken");
require("dotenv").config();
const authenticate=(req,res,next)=>{
    let token=req.headers.authorization;
    try {
        if(token){
            let decode=jwt.verify(token,process.env.key);
            if(decode){
                req.body.user=decode.userId;
                next();
            }else{
                res.json({"msg":"Wrong credentials!!!"})
            }
        }else{
            res.json({"msg":"login first!!"})
        }
    } catch (error) {
       console.log("error from authentication middleware",error);
       res.json({"msg":"Wrong credentials!"})
    }
    
    
}

module.exports={
    authenticate
}