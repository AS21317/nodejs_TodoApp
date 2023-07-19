import jwt from "jsonwebtoken"

export const sendCookie = (user,res,message,statusCode=200,)=>{
         //   Generating Token
         const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);

         res.status(statusCode).cookie("token",token,{
  
          httpOnly:true,
          maxAge:15*60*1000 ,

        //   logout ke cookie option bhi same yhi hone chahiye
          SameSite:process.env.NODE_ENV === "Developement"?"lax":  "none",
          secure:process.env.NODE_ENV === "Developement"?false: true,

         })
         .json({
          success:true,
          message, 
         })
}