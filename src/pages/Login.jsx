import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../style.scss';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState(null);      
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      login(inputs);
      navigate('/');
    } catch (error) {
      console.log('something went wrong', error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
        <input type='email' placeholder='email' name='email' value={inputs.email} onChange={handleOnChange}/>
        <input type='password' placeholder='password' name='password' value={inputs.password} onChange={handleOnChange}/>
        {errorMessage && <div className='err-msg'>{errorMessage}</div>}
        <button type='submit'>Login</button>
        <span>
          <p>Dont have an account? <Link to='/register'>Register</Link> </p>
        </span>
      </form>
    </div>
  )
}
