import express from "express";
const router = express.Router();

import authUser from "../middlewares/usermiddleware.js";

import { getAllUsers,getSingleUser,createWorkout, updateWorkout, deleteWorkout } from "../controllers/workoutController.js";

router.use(authUser);

router.get("/",getAllUsers);
router.get("/:id",getSingleUser);

router.post("/", createWorkout)
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;