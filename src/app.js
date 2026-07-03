
import dotenv from "dotenv";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDb } from "./db/connect.js";
import router from "./routes/user.js";

import session from "express-session";

dotenv.config();

const app=express();
const port=3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "views")));

connectDb();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session
     ({
          secret:process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
     }))


app.get("/",(req,resp)=>{
      console.log(req.session);
     resp.sendFile(path.join(__dirname, "views", "index.html"));
    
})


app.use("/", router);
app.use("/uploads", express.static((path.join(__dirname, "uploads"))));
app.use("/api", router);

app.listen(port,()=>{
    console.log(`server running at port =${port}`)})