import { createContext , useState} from 'react'
import axios from 'axios';
export const Data = createContext();
import { useAuthContext } from '../Hooks/useAuthContext';

const WorkoutContext = ({children}) => {
  const {user} = useAuthContext();
  //   GET REQUEST STATE 
    const [workouts, setWorkouts] = useState(null);

    // GET REQUEST FUNCTION
    const getWorkouts = async () => {
    const res = await axios.get("https://workoutlogger-backend.onrender.com/api/workouts",{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    });
    const data = res.data;
    console.log(data);
    setWorkouts(data);
  };

    //  POST REQUEST STATE
    const [form, setForm] = useState({
    title: "",
    reps: "",
    load: ""
  });

  //   PATCH REQUEST STATE
  const [updateForm,setUpdateForm] = useState({
    _id : null,
    title : "",
    reps : "",
    load : ""
  });

  const toggleEdit = (item)=>{
    setUpdateForm({
      _id : item._id,
    title :item.title,
    reps  : item.reps,
    load : item.load
    })
  }

  // DELETE REQUEST FUNCTION
  const handleDelete = async (_id)=>{
    await axios.delete(`https://workoutlogger-backend.onrender.com/api/workouts/${_id}`,{
      headers : {
        "Authorization" : `Bearer ${user.token}`
      }
    });
    getWorkouts();
  }
  

  return (
    <Data.Provider value={{workouts,setWorkouts,getWorkouts,form,setForm,updateForm,setUpdateForm,toggleEdit,handleDelete}}>
      {children}
    </Data.Provider>
  )
}

export default WorkoutContext
