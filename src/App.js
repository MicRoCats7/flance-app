import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import AllJobs from './Pages/AllJobs';
import Careers from './Pages/Careers';
import History from './Pages/History';
import Login from './Pages/login';
import Register from './Pages/register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/AllJobs' element={<AllJobs/>} />
        <Route path='/Careers' element={<Careers/>} />
        <Route path='/History' element={<History/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
