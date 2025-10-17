import express, { urlencoded } from "express";
const app = express();
import cors from "cors";

// import dotenv from "dotenv";
// dotenv.config();
const PORT=process.env.PORT || 4000
import("./src/DB/db.js")
import workoutRouters from "./src/routes/workoutRoutes.js"

//middewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/workouts",workoutRouters);


app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
})