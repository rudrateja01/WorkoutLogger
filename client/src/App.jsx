import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState(null);

  //getWorkouts
  const getWorkouts = async () => {
    const res = await axios.get("http://localhost:4000/api/workouts");
    const data = res.data;
    console.log(data);
    setWorkouts(data);
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  //POST REQUEST
  const [form, setForm] = useState({
    title: "",
    reps: "",
    load: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    // const res = await fetch("http://localhost:4000/api/workouts",
    //   {
    //     method : "POST",
    //     headers : {
    //       "Content-Type" : "application/json"
    //     },
    //     body : JSON.stringify(form)
    //   }
    // );
    // console.log(res);
    const res = await axios.post("http://localhost:4000/api/workouts", form);
    const data = res.data;
    console.log([...workouts,data]);
    setForm({
      title: "",
    reps: "",
    load: ""
    })

    getWorkouts();
  };

  //DELETE REQUEST
  const handleDelete = async (_id)=>{
    await axios.delete(`http://localhost:4000/api/workouts/${_id}`);
    getWorkouts();
  }

  // PATCH REQUEST
  const [updateForm,setUpdateForm] = useState({
    _id : null,
    title : "",
    reps : "",
    load : ""
  });

  const handleEditField = (e)=>{
    const {name,value}=e.target;
    setUpdateForm({...updateForm,[name]:value})
  }
  const toggleUpdate = (item)=>{
    setUpdateForm({
      _id : item._id,
    title :item.title,
    reps  : item.reps,
    load : item.load
    })
  }
  const handleUpdate = async (e)=>{
    e.preventDefault();
    const { _id, title, reps, load} = updateForm;

    await axios.patch(`http://localhost:4000/api/workouts/${_id}`,
      {title, reps, load}
    ),getWorkouts(),
    setUpdateForm({
      _id : null,
    title : "",
    reps : "",
    load : ""
    })
  }

  return (
    <div className="menu">
      {!updateForm._id && <form onSubmit={handleSubmit}>
        <h1>create workout</h1>
        <label>title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={(e) => {
            return setForm({ ...form, title: e.target.value });
          }}
        />
        <br />
        <label>reps</label>
        <input
          type="text"
          name="reps"
          value={form.reps}
          onChange={(e) => {
            return setForm({ ...form, reps: e.target.value });
          }}
        />
        <br />
        <label>load</label>
        <input
          type="text"
          name="load"
          value={form.load}
          onChange={(e) => {
            return setForm({ ...form, load: e.target.value });
          }}
        />
        <br />
        <button>Create Workout</button>
      </form>}

      {updateForm._id &&
        <form >
           <h1>Edit Workout</h1>
          <label>title</label>
          <input type="text" name="title"
          value={updateForm.title}
          onChange={handleEditField} />
          
          <br />
          <label>reps</label>
          <input type="text" name="reps"
          value={updateForm.reps}
          onChange={handleEditField}
          />
          <br />
          <label>load</label>
          <input type="text" name="load"
          value={updateForm.load}
          onChange={handleEditField} />
          
          <br />
          <button onClick={handleUpdate}>Update Workout</button>
        </form>
      }

      <h1>All Workouts</h1>
      {workouts &&
        workouts.map((item, id) => {
          return (
            <div key={id}>
              <h1>{item.title}</h1>
              <p>{item.reps}</p>
              <p>{item.load}</p>
              <button onClick={()=>toggleUpdate(item)}>edit</button> {" "}
              <button onClick={()=> handleDelete(item._id)}>delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
