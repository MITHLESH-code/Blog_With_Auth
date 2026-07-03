import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
    labels:{
     type:String,
     required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
},
    coverImage:{
        url:{
        type:String,
        required:true
        }
    }

},{timestamps:true});

export const Blog=mongoose.model("Blog",blogSchema);