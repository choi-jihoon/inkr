import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import Demo from "../Demo";


import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-header'>
        <img className='form-logo' src='/images/small-logo.png' alt='inkr logo'></img>
        <h4>
          Log in to Inkr
        </h4>
      </div>
      <ul>
        {errors.map((error, idx) => (
          <li className='error' key={idx}>{error}</li>
        ))}
      </ul>
      <div className='form-element'>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder='Username or Email'
          required
        />
      </div>
      <div className='form-element'>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
      </div>
      <div className='button-container'>
        <button className='login-button' type="submit">Log In</button>
        <Demo />
      </div>
    </form>
  );
}

export default LoginForm;
