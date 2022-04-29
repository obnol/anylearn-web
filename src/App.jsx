import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import LogIn from './app/auth/LogIn';
import Signup from './app/auth/SignUp';
import Home from './app/home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from './store/auth';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<Signup />} />
      <Route exact path='/linkedin' element={<LinkedInCallback />} />
    </Routes>
  );
}

export default App;
