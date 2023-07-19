//*  THis is our main file 

import {app} from "./app.js"


import { connectDb } from "./data/database.js";


app.listen(4000,()=>{
    console.log(`Server is working on Port : ${process.env.PORT} in ${process.env.NODE_ENV} mode` );
})

// calling the function to connect db
connectDb()