import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState(null);      
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      await axios.post('/auth/register', inputs);
      console.log('success');
      navigate('/');
    } catch (error) {
      console.log('something went wrong', error);
      setErrorMessage(error.response.data.message);
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={onFormSubmit}>
        <input required type='text' placeholder='username' name='username' onChange={handleOnChange} value={inputs.username}/>
        <input required type='email' placeholder='email' name='email' onChange={handleOnChange} value={inputs.email}/>
        <input required type='password' placeholder='password' name='password' onChange={handleOnChange} value={inputs.password}/>
        {errorMessage && <div className='err-msg'>{errorMessage}</div>}
        <button type='submit'>Register</button>
        <span>
          <p>Already have an account? <Link to='/login'>Login</Link> </p>
        </span>
      </form>
    </div>
  )
}
