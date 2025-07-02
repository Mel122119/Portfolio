import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
import BackButton from "./Components/BackButton";
import HomePae from "./Pages/HomePae";



const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePae />} />
        
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        
       
        
      </Routes>
       
     
    </BrowserRouter>
    
  );
};

export default App;
