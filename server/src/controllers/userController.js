import userModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { createToken } from "../utils/token.js";

//Login User
export const loginUser = async (req, res) => {
  try {
    const { _id,email, password } = req.body;

    const exists = await userModel.findOne({ email });
    // verifing Email
    if (!exists) {
      return res.status(400).json({ message: "Email Doesn't Exists" });
    }

    //Verifing Password
    const match = await bcrypt.compare(password, exists.password);
    if(!match){
        return res.status(400).json({message : "Incorrect Password"})
    }

    const token = createToken(exists._id);
    console.log(token);
    res.json({ message: "User Logined Successfully", email,token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Signup User
export const signupUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email Already Exists" });
    }

    // password hash
    const hash = await bcrypt.hash(password, 10);

    //saving user into database
    const user = await new userModel({ email, password: hash }).save();

    //Generating Token
    const token = createToken(user._id);
    console.log(token);
    res.json({ message: "User Signup Successfully", user ,token});
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
