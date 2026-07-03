import express from "express";
import bcrypt from "bcrypt";
import path from "path";
import { fileURLToPath } from "url";
import { User } from "../models/user.js";
import { islogedin } from "../middleware/auth.js";


import mongoose, { Schema } from "mongoose";



const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


router.get("/login", (req, resp) => {
    console.log("logi hit");
    resp.sendFile(
        path.join(__dirname, "../views/login.html"));
})

router.get("/signup", (req, resp) => {
    resp.sendFile(
        path.join(__dirname, "../views/signup.html")
    );
})

router.post("/signup", async(req, resp) => {
    try {
        // console.log("body", req.body);

        const { firstname, lastname, email, password ,confirmpassword} = req.body;
        // const  confipassword=req.body[ confirmpassword];

        if(password !== confirmpassword){
            return resp.Status(400).send("please check the password");
            }
          
            const  existinguser= await User.findOne({email});
            if(existinguser){
                return resp.status(409).send("user already exist");
            }

            const salt=12;
            const hashedpassword= await bcrypt.hash(password,salt);
            // password=hasspassword;
        const user = await User.create({
            firstname,
            lastname,
            email,
             password : hashedpassword,    
        });
        console.log("USER SAVED:", user);
     
    return resp.sendFile(
        path.join(__dirname, "../views/index.html")
    );
    }
    catch (error) {
        console.log("user creation failed", error.message)
        // process.exit(1);
    }
})

router.post("/login", async(req,resp)=>{
    try{
    const{email,password}=req.body;

    const findUser= await User.findOne({email});
    if(!findUser){
     return resp.status(404).send("Invalid email or password");
    } 
    const isMatch= await bcrypt.compare(password,findUser.password);
     if(!isMatch){
       return resp.status(401).send("Invalid email or password");
     }

     req.session.user={
            id: findUser._id,
            name: findUser.firstname,
            profilePic: findUser.profilePic

        }


return resp.redirect("/");
    
   }
   catch(error){
    return resp.status(500).send(error.message)
   }

})

router.get("/write",islogedin,(req,resp)=>{
    resp.status(200).sendFile(
    path.join(__dirname,"../views/write-blog.html")
);
});

router.get("/api/write-check", islogedin, (req, resp) => {
    resp.status(200).json({
        success: true,
        message: "allowed"
    });
});


router.get("/me",(req,resp)=>{
    if(!req.session.user){
      return resp.status(401).json({
        success:false,
        message:"please login first"
      });
    }
    return resp.status(200).json({
        success:true,
        user:req.session.user
    });
});



router.get("/logout",(req,resp)=>{
    resp.clearCookie("connect.sid");
    resp.redirect("/");
})


export default router;