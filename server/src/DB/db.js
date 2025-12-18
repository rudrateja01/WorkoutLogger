import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rudrateja_01:Rudrateja%40123@cluster0.ekmyq6v.mongodb.net/workoutBlogger?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log(error.message)});