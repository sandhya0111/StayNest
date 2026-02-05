
const user = require("../models/user.js");
 

module.exports.renderSignup=(req,res)=>{
    res.render("users/signup.ejs")
}  


module.exports.signup=async(req,res)=>{
    try{
       let{username,email,password}=req.body;
        const newuser= new user({email,username})
        const registerd=await user.register(newuser,password)
        console.log(registerd)
        req.login(registerd,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged in now")
        res.redirect("/listings")
    })
    }catch(err){
        req.flash("error", err.message)
        res.redirect("/signup");
    }
    
}


module.exports.renderLogin=(req,res)=>{
    res.render("users/login.ejs")
}


module.exports.login=async(req,res)=>{
   req.flash("success","Welcome to stayNest you are logged in!!!")
   let redirectUrl=res.locals.redirectUrl||"/listings"
   console.log(redirectUrl)
    res.redirect(redirectUrl);
}

module.exports.logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out now")
        res.redirect("/listings")
    })
}