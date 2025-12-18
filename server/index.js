import express from "express";
const app = express();
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
// const PORT=process.env.PORT || 4000
import("./src/DB/db.js")

// Require Routes
import workoutRouters from "./src/routes/workoutRoutes.js"
import userRoutes from "./src/routes/userRoutes.js"

//middewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/workouts",workoutRouters);
app.use("/api/user",userRoutes);

console.log(process.env.PORT);


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port: ${process.env.PORT}`);
})