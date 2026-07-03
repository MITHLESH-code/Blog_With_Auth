import session from "express-session"

export const islogedin= (req,resp,next)=>{
    console.log(req.session);
    if(!req.session.user){
        return resp.status(401).send("please login first");
    }
    next();
}