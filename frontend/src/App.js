import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routers, Route } from "react-router-dom";


function App() {
  return (
    <div className = "App">
    
    
    
    <Navbar/>
    <Router>
      <Routes>
        <Route path = "/" />
        <Route path = "/checkout"/>
      </Routes>
    </Router>
    
    
    
    </div>
  );
}

export default App;
