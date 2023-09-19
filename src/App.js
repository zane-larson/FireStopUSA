import Navbar from "./Navbar"
import ContactForm from "./contact";
import Home from "./Home"
import React from "react";
import Services from "./Services"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <Routes>
          
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
          
        </Routes>
    </div>
    </Router>
  );
}

export default App;
