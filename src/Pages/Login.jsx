import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase/firebase.js";
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const email = useRef()
  const password = useRef()

  const loginUser = (event) => {
    event.preventDefault();
    console.log(email.current.value)
    console.log(password.current.value)
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate('/home')
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  email.current.value = ''
  password.current.value = ''
  }
  const navigate = useNavigate()
  return (
    <>
      <div >
        <div >
          <h1 >Login</h1>
          <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Email"           
              ref={email}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              ref={password}
            />
            <br />
            
            <button mt-4>Login</button>
          </form>
          <h3 >
          <Link to="/register">Don't have an account?</Link>
        </h3>
        </div> 
      </div>
    </>
  )
}

export default Login