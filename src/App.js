import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectMode } from './features/theme/themeSlice';
import { LIGHT } from './app/constants';

function App() {
  const mode = useSelector(selectMode);

  return (
    <div className={`App text-left font-sans lg:h-[100vh] lg:overflow-hidden ${mode === LIGHT ? "bg-onPrimary" : "bg-darkOnPrimary"}`}>
      <Navbar></Navbar>
      
      <HomePage></HomePage>
    </div>
  );
}

export default App;
