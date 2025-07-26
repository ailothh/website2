import React from 'react';
import './App.css';
import ParticlesComponent from './components/particles';
import { Hero } from './aboutme';
function App() {
  return (
    <div className="App">
        <ParticlesComponent id = "particles"/>
        <Hero/>
    </div>
  );
}

export default App;
