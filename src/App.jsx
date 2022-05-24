import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import LogIn from './app/auth/LogIn';
import Signup from './app/auth/SignUp';
import Home from './app/home/Home';
import Course from './app/course/Course';
import Account from './app/account/Account';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/login' element={<LogIn />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/linkedin' element={<LinkedInCallback />} />
      <Route exact path='/account' element={<Account />} />
      <Route exact path='/course/:courseId' element={<Course />} />
      <Route exact path='/course/:courseId/accommodations' element={<Course />} />
      <Route exact path='/course/:courseId/activities' element={<Course />} />
    </Routes>
  );
}

export default App;
