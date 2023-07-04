import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <div className="App text-left font-sans lg:h-[100vh] overflow-hidden">
      <Navbar></Navbar>
      
      <HomePage></HomePage>
    </div>
  );
}

export default App;
