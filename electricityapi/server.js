//npm i bcrypt cors mongoose jsonwebtoken

require("dotenv").config();
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
// app.use(bodyParser.urlencoded({extended:true})
app.use(bodyParser.json());//api
const cors=require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

//cross origin resource sharing
// const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const errorHandler=require('./handlers/error')

const authRoutes=require("./routes/auth")


const messagesRoutes=require("./routes/messages")

const {loginRequired,ensureCorrectUser} =require("./middleware/auth")


app.use("/api/users/:id/messages",loginRequired,
ensureCorrectUser,messagesRoutes);

app.use("/api/routes",authRoutes)


app.use("/api/messages",loginRequired,async function(req,res,next){

try{
let messages=await db.Message.find().sort({createdAt:"desc"}).populate("user",
{username:true,
profileImageUrl:true})
return res.status(200).json(messages);
}catch(err){
  return next(err)
}

})


app.use((req,res,next)=>{
  let err=new Error("Not Found")
  err.status=404;
  next(err);
});

app.use(errorHandler);


app.listen(process.env.PORT||8081,()=>{
  console.log("server started");
})
