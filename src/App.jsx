import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Views/Contact";
import Projects from "./Views/Projects";
import Achievements from "./Views/Achievements";
import Home from "./Views/Home";

const App = () => {
  return (
    <div className="bg-color2 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
