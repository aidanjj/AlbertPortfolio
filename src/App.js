import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import ParticleAnimation from 'react-particle-animation';

function App() {
  return (
    <>
      <div className='app'>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar/>
          <About/>
        </BrowserRouter>
      </div>
    </>
  ); 
}

export default App;
