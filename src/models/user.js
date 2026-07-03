
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
      firstname:{
        type:String,
        required:true,
        trim:true

      },
       lastname:{
        type:String,
        // required:true,
        trim:true

      },
      email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
      trim:true
      },
      password:{
        type:String,
        required:true
      },
      
      profilePic:{
           url: { 
      type: String, 
      default: "/uploads/default-avatar.png"// Fallback avatar
    },
    
    uploadedAt: { 
      type: Date, 
      default: Date.now 
    }
    
      }
},{timestamps:true})

export  const User=mongoose.model("User",userSchema);