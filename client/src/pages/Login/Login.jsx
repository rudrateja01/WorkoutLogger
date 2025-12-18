import React, { useState } from "react";
import "./LoginStyle.css";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const { login, error } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email,password);
    await login(email, password);
    setEmail(""), setPassword("");
  };

  return (
    <div className="main-form">
      <form>
        <h1>Login</h1>
        <div className="field">
          <label htmlFor="">Email : </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="field">
          <label htmlFor="">Password : </label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
