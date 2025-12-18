import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async(email,password) => {
    const res = await fetch("http://localhost:4000/api/user/login",{
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
  };
  return {login,error}

};

export default useLogin;
