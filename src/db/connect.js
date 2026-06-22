import mongoose from "mongoose";

export const connectDb= async () => {
 
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDb connected");
    }
    catch(error){
        console.log("mongoDb server error", error.message);
        process.exit(1);
    }
};