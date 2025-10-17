import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/project")
.then(()=>{console.log("Database Connected")})
.catch((error)=>{console.log(error.message)});