import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Login.css";
import axios from 'axios'
import {useRef} from 'react';
import {Navigate, useNavigate} from 'react-router-dom'
import User from "../User/User";
import {useSelector,useDispatch} from 'react-redux'
import {LOGGEDIN, LOGGEDOUT,Password,UserName} from '../../reducers/Actions'



 


function Login() {
 const navigate = useNavigate();
     const [Usermail,setUserMail] = useState('');
   const [Userpass,SetUserPass ] = useState('')
   const [IsTherError,setIsTherError] = useState('')
  let isLogged = false;
  const Dispatch= useDispatch();
  const loggedState = useSelector (state=>state.isLogged);
  console.log("from log" +loggedState);
 
 

function UserNameChanged (e){
console.log(e.target.value);
 
console.log("////////////");
console.log("useraname ==" +e.target.value);
 setUserMail(e.target.value)
 
}

function PassWordChanged (e) {
  console.log("////////////");
  console.log("PASSWORD ==" +e.target.value);
  SetUserPass(e.target.value)
 
}

  function VerifLogin(e) {

    e.preventDefault();
   
    axios.post('http://localhost:3001/api/v1/user/login', {

      email:Usermail ,
      password: Userpass
      // email: 'tony@stark.com',
      // password: 'password123'
      //  Email: steve@rogers.com,
      // Password: password456
    })
    .then(function (response) {
      console.log(response.data.body.token);
      localStorage.setItem ('token',response.data.body.token)
 
      Dispatch ({
        type : LOGGEDIN

      });
      navigate('/user') 
    })
    .catch(function (error) {
      console.log(error);
      // Dispatch ({
      //   type : LOGGEDOUT

      // });
      setIsTherError("Email ou Mot De Passe Erroné")
    });

    

    
  }
 
 
 
  return (
    <>
      <Navbar></Navbar>
 
      <main className="main bg-dark">
        <div className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username"  onChange={UserNameChanged} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={PassWordChanged} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
              <br/>
              

            </div>
            <h4 className="message_erreur">{IsTherError}</h4>
            <button onClick={VerifLogin} className="sign-in-button">Sign In</button>
          </form>
        </div>
      </main>
 
       <Footer></Footer>
    </>
  );
}

export default Login;
