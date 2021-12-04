const express= require("express");
const ejs=require("ejs");
const app=express();

app.set('view engine','ejs');

app.use(express.static("general"));

app.get("/",function(req,res){
 res.render("index");
});

app.get("/Resource",function(req,res){
    res.render("Resource");
});

app.get("/Members",function(req,res){
    res.render("Members");
});

app.get("/Developers",function(req,res){
    res.render("Developers");
});





app.listen(3000,function(){
    console.log("server is running at port 3000");
});