import mongoose from "mongoose";

const workoutSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    reps : {
        type : Number,
        required : true,
    },
    load : {
        type : Number,
        required : true
    },
    user_id : {
        type : String,
        required : true
    }
},{timestamps : true});

const workout = new mongoose.model("workout",workoutSchema);
export default workout;