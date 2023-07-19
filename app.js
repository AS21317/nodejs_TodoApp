import express from 'express'
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"

import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import { errorMiddleWare } from './middlewares/error.js'
import cors from "cors"



export const app=express()

config({
    path:"./data/config.env"
})

// Adding middleware to read json data from body
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    // CREDENTIAL WILL  HELP TO DELIEVER COOKIE TO FRONT_END
    credentials:true,

}))




// using routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);



app.get("/",(req,res)=>
{
    res.send("<h1>Nice Working </h1>")
})


// Error handling via error middleware 
app.use(errorMiddleWare)







 

