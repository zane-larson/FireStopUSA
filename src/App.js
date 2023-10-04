import Navbar from "./Navbar"
import ContactForm from "./contact";
import Home from "./Home"
import React from "react";
import Servicemap from "./Servicemap";
import Services from "./Services"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./Footer"
import Aboutus from "./Aboutus";
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <Routes>
          
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/servicemap" element={<Servicemap/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
          
          
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
