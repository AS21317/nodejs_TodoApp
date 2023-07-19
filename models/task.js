import mongoose from "mongoose";

const schema= new mongoose.Schema({
    title:{
        type:String,
        unique:true,
    },
    description:{
        type:String,
       
         require:true,

    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        
        //collection name should be pass in ref 
        ref:"User",
        require:true,
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

})

// Creating model
export const Task = mongoose.model("Task",schema);