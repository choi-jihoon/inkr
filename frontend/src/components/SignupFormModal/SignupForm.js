import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import './SignupForm.css';

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Passwords do not match.']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-header'>
        <img className='form-logo' src='/images/small-logo.png' alt='inkr logo'></img>
        <h4>
          Sign up for Inkr
        </h4>
      </div>
      <ul className='errors-container'>
        {errors.map((error, idx) =>
          (<li className='error' key={idx}>{error}</li>))}
      </ul>
      <div className='form-element'>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
          required
        />
      </div>
      <div className='form-element'>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
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
      <div className='form-element'>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm Password'
          required
        />
      </div>
      <button className='signup-butt' type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
