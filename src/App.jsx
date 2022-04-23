import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './app/landing/LogIn';

const Home = () => {
  return <div>Home</div>;
};

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
    </Routes>
  );
}

export default App;
