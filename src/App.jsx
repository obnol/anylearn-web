import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import LogIn from './app/auth/LogIn';
import Search from './app/search/Search';
import Signup from './app/auth/SignUp';
import Home from './app/home/Home';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/search' element={<Search />}/>
      <Route path='/signup' element={<Signup />} />
      <Route exact path='/linkedin' element={<LinkedInCallback />} />
    </Routes>
  );
}

export default App;
