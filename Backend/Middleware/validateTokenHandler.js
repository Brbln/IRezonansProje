const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");

const validateToken=asyncHandler(async(res,req,next)=>{
    let token;
    let authHeadler=req.headers.Authorization || req.headers.authorization;
    if(authHeadler && authHeadler.startsWith("Bearer")){
        token.authHeadler.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECERT,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized")
            }
            req.user=decoded.user;
            next();
        });

        if(!token){
            res.status(401);
            throw new Error("user is not uthorized or token is missing")
        }


    }
});
module.exports=validateToken;
