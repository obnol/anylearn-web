import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './app/landing/LogIn';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';

const Home = () => {
  return <div>Home</div>;
};

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route exact path='/linkedin' element={<LinkedInCallback />} />
    </Routes>
  );
}

export default App;
