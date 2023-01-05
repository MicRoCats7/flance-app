import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/headerSection'
import './App.css';
import Sponsor from './components/Sponsor/Sponsor';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Sponsor />
    </div>
  );
}

export default App;
