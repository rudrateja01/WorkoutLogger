import workout from "../models/workoutModel.js";

export const getAllUsers = async (req, res) => {
  const user_id = req.user._id;
  try {
    const workoutData = await workout.find({user_id}).sort({ createdAt: 1 });
    res.status(200).json(workoutData);
  } catch (error) {
    res.status(500).json({ Message: "Internal server error" });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    
    const findUser = await workout.findById({_id : id});
    
      res.status(200).json({ success: true, findUser });
  } catch (error) {
    res.status(500).json({ Message: "Internal server error" });
  }
};

export const createWorkout = async(req,res)=>{
  const {title,reps,load} = req.body;
  const user_id = req.user._id;
  try {
    const workoutData = new workout({title,reps,load,user_id});
    
    await workoutData.save();

    res.status(201).json({success : true,message : "workout created successfully",workoutData})
  } catch (error) {
    res.status(500).json({ Message: "Internal server error" });
  }
}

export const updateWorkout = async(req,res)=>{
  try {
    const id = req.params.id;
    const workoutData = await workout.findByIdAndUpdate({_id : id},req.body,{new:true});
    res.status(200).json(workoutData,{message : "workout updated successfully"});
  } catch (error) {
    res.status(500).json({ Message: "Internal server error" });
  }
}

export const deleteWorkout = async (req,res)=>{
  try {
    const id = req.params.id;
    const deleteData = await workout.findByIdAndDelete({_id : id},{new : true})
    res.status(201).json({success : true,message : "workout deleted successfully",deleteData})
  } catch (error) {
    res.status(500).json({ Message: "Internal server error" });
  }
}