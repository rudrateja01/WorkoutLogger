import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";

const authUser = async(req,res,next)=>{
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error : "Auth Token Required"});
    }

    const token = authorization.split(" ")[1];
    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findOne({_id}).select("_id");
        next();
    } catch (error) {
        res.status(500).json({error : "Request is not Authorized"})
    }
}

export default authUser;