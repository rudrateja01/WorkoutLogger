import { useEffect, useContext } from "react";
import { Data } from "../../context/WorkoutContext";
import "./RecordStyle.css";
import  edit from '../../assets/edit.png'
import deleted from '../../assets/delete.png'
import { useAuthContext } from "../../Hooks/useAuthContext";


const Records = () => {
  const { workouts, getWorkouts, handleDelete, toggleEdit } = useContext(Data);
  const {user} = useAuthContext();

  useEffect(() => {
    if(user){
      getWorkouts();
    }
  }, [user,getWorkouts]);
  return (
    <div className="records">
      {workouts &&
        workouts.map((item, id) => {
          return (
            <div className="record" key={id}>
              <h1>{item.title}</h1>
              <p>Reps: {item.reps}</p>
              <p>Load(in kg): {item.load}</p>
              <div className="btns">
                <img onClick={() => toggleEdit(item)} src={edit} alt="" />
                <img onClick={() => handleDelete(item._id)} src={deleted} alt="" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Records;
