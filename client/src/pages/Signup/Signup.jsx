import React, { useState } from "react";
import "./SignupStyle.css"
import useSignup from "../../Hooks/useSignup";


const Signup = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const {signup,error} = useSignup();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    // console.log(email,password);
    await signup(email,password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="main-form">
      
      <form >
        <h1>Signup</h1>
        <div className="field">
          <label htmlFor="">Email : </label>
          <input type="email" 
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}/>
        </div>
        <div className="field">
          <label htmlFor="">Password : </label>
          <input type="password" 
          onChange={(e)=>{setPassword(e.target.value)}}
          value={password}
          />
        </div>
        <button onClick={handleSubmit}>Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
