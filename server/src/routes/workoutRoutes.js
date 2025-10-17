import express from "express";
const router = express.Router();

import { getAllUsers,getSingleUser,createWorkout, updateWorkout, deleteWorkout } from "../controllers/workoutController.js";

router.get("/",getAllUsers);
router.get("/:id",getSingleUser);

router.post("/", createWorkout)
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;