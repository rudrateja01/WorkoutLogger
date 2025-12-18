// the reason for using custom hooks is, when we want the functionality of login or signup or dispatch , we cant use directly using authRedcer.
// so we use custom hooks and pass this value inside the custom hooks and later it gets reflected in dispatch 

import { AuthContext } from "../context/AuthContext";
import {  useContext } from "react";

export const useAuthContext = () =>{
    const context = useContext(AuthContext);

    if(!context){
        throw Error("useAthContext can not be used");
    }

    return context;
}