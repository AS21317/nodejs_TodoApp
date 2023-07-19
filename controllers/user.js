import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

export const getAllUsers =  async (req,res)=>{

      
    };
 


 export    const  login = async (req,res,next)=>{

  try {
    const {email,password} = req.body ;

    // schema me password ka select false set hai , so select it manually
    const user = await User.findOne({email}).select("+password");

    // handelling errors
    if(!user) return next(new ErrorHandler("Invalid Email or Password ",400))


  
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) return next(new ErrorHandler("Invalid Email or Password ",400))




    // if all matches 
    sendCookie(user,res,`Welcome Back ${user.name}`,200)
  } catch (error) {
    next(error)
    
  }
};



    export const register = async (req,res)=>{

       try {
        const {name,email,password}= req.body;

       let user = await User.findOne({email});

  
// Error handeling
       if(user) return next(new ErrorHandler("User Already Exist ",400))


    //    Hashing the password 
           const hashPassword = await bcrypt.hash(password,10);

 


       user=await User.create({
        name,
        email,
        password:hashPassword,
       })

     sendCookie(user,res,"Register Successfuly ", 201)
       } catch (error) {
        next(error);
       }
     
    }; 



    export const getMyProfile =  (req,res)=>{
      
        res.status(200).json({
            success:true,
           user:req.user,
        })
    
    };



    export const logout = (req,res)=>{
        res.status(200).cookie("token","",{
            expires:new Date(Date.now()),
            SameSite:process.env.NODE_ENV === "Developement"?"lax":  "none",
          secure:process.env.NODE_ENV === "Developement"?false: true,
        }).json({
            success:true,
           message:"Now you are Logged Out"
        })
    
    }




