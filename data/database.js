import mongoose from "mongoose";


export const connectDb =()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"backendApi",
}).then(()=>{
    console.log("Batabase Connected !");
}).catch((e)=>{
    console.log("Folloing DB connection error occur !! ");
    console.log(e);
})

}