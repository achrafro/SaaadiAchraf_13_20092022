import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import App from './App';
import User from './pages/User/User';
function ProjectRoutes() {
  return (
<BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login /> } ></Route>
      <Route path="/user" element={<User /> } ></Route>

         <Route path="/" element={<Home /> } >
         </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default ProjectRoutes