import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import "./Nav.css";
import logo from "../../Assets/img/argentBankLogo.png";
import { Link, BrowserRouter, Route,Routes } from "react-router-dom";
import Login from '../../pages/Login/Login'
import Home from "../../pages/Home/Home";
import App from "../../App";
import {LOGGEDIN, LOGGEDOUT} from '../../reducers/Actions'


function Navbar(props) {
  console.log(props.user);
  const loggedState = useSelector (state=>state.isLogged);
  console.log(loggedState);
  const login = localStorage.getItem('login');
  const Dispatch= useDispatch();

  function loggedout () {
      Dispatch ({
        type : LOGGEDOUT

      });
   }
   return (
       <>
        <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          </Link>
          <div>
          {loggedState == false &&
            <Link to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign in
              
            
              
            </Link>
          }
            {loggedState == true &&

             <Link to="/" onClick={loggedout} className="main-nav-item">
             <> 
               {props.user} <i className="fa fa-sign-out"></i> Sign Out
               </> 
            </Link>
           
          }
          </div>
        </nav>
      </>
    
   );
}

export default Navbar;
