import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Define a state object holding all the required information
  const [studentInfo] = useState({
    title: "Welcome to Fullstack Development - I",
    subtitle: "React JS Programming Week09 Lab exercise",
    id: "101564894", 
    name: "Karthik Madarapu", 
    college: "George Brown College, Toronto"
  });




  

  return (
    <div className="App">
      <header className="App-header">
        {/* The React spinning logo */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Render the details cleanly matching the layout hierarchy */}
        <h1>{studentInfo.title}</h1>
        <h3>{studentInfo.subtitle}</h3>
        <h4>{studentInfo.id}</h4>
        <h5>{studentInfo.name}</h5>
        <p>{studentInfo.college}</p>
      </header>
    </div>
  );
}

export default App;
