import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async(email,password) => {
    const res = await fetch("https://workoutlogger-backend.onrender.com/api/user/signup",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({email,password})
    })
    const data = await res.json();
    
    if(!res.ok){
        setError(data.message)
    }

    if(res.ok){
        // saving data into database
        localStorage.setItem("user",JSON.stringify(data));

        // update the user context
        dispatch({type : "LOGIN", payload : data})
    }
  }
  return {error,signup}
};

export default useSignup;
