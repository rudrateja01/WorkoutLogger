import React, { use, useContext } from 'react'
import axios from 'axios';
import {Data} from "../../context/WorkoutContext"
import "./FormStyle.css"
import { useAuthContext } from '../../Hooks/useAuthContext';


const Form = () => {
  const {user} = useAuthContext();
  const {workouts,setWorkouts,getWorkouts,form,setForm,setUpdateForm,updateForm}=useContext(Data);

  // CREATE FORM FUNCTION
  const createWorkout = async (e) => {
    e.preventDefault();
    console.log(form);

    const res = await axios.post("https://workoutlogger-backend.onrender.com/api/workouts", form,{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    });
    const data = res.data;
    setWorkouts([...workouts,data]);
    setForm({
      title: "",
    reps: "",
    load: ""
    })

    getWorkouts();
  }

  // UPDATE FORM FUNCTIONS
   const handleUpdateField = (e)=>{
    const {name,value}=e.target;
    setUpdateForm({...updateForm,[name]:value})
  }
  const handleUpdate = async (e)=>{
    e.preventDefault();
    const { _id, title, reps, load} = updateForm;

    await axios.patch(`https://workoutlogger-backend.onrender.com/api/workouts/${_id}`,
      {title, reps, load},{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    }
    ),getWorkouts(),
    setUpdateForm({
      _id : null,
    title : "",
    reps : "",
    load : ""
    })
  }
  return (
    <>

      {/* // CRETAE Workout */}
       { !updateForm._id && (
      <div className="form">
        <h1>Create Record</h1>
       
          <form onSubmit={createWorkout}>        
        <div className="field">
          <label>title</label>{" "}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={(e) => {
            return setForm({ ...form, title: e.target.value });
          }}
        />
        </div>
        <div className="field">
          <label>reps</label>{" "}
        <input
          type="text"
          name="reps"
          value={form.reps}
          onChange={(e) => {
            return setForm({ ...form, reps: e.target.value });
          }}
        />
        </div>
        <div className="field">
          <label>load</label>{" "}
        <input
          type="text"
          name="load"
          value={form.load}
          onChange={(e) => {
            return setForm({ ...form, load: e.target.value });
          }}
        />
        </div>
        <button>Create Workout</button>
      </form>
      </div>
        )}
      
      
      {/* // UPDATE Form */}
      { updateForm._id && (
      <div className="form">
        <h1>Edit Record</h1>
        
        <form >           
          <div className="field">
            <label>title</label>{" "}
          <input type="text" name="title"
          value={updateForm.title}
          onChange={handleUpdateField} />
          </div>
          <div className="field">
            <label>reps</label>{" "}
          <input type="text" name="reps"
          value={updateForm.reps}
          onChange={handleUpdateField}
          />
          </div>
          
          <div className="field">
            <label>load</label>{" "}
          <input type="text" name="load"
          value={updateForm.load}
          onChange={handleUpdateField} />
          </div>
          <button onClick={handleUpdate}>Update</button>
        </form>
        </div>
        )}
      
    </>
  )
}

export default Form
