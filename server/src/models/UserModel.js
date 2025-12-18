import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }
},{timeStamp : true});

const userModel = new mongoose.model("UserData",userSchema);

export default userModel;