import express from "express";
const router = express.Router();

import authUser from "../middlewares/usermiddleware.js";

import { getAllWorkouts,GetSingleWorkout,createWorkout, updateWorkout, deleteWorkout } from "../controllers/workoutController.js";

router.use(authUser);

router.get("/",getAllWorkouts);
router.get("/:id",GetSingleWorkout);

router.post("/", createWorkout)
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;