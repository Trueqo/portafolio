import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Notfount from "./Pages/Notfount";
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  return (
    <div className="bg-color2 ">
      <Navbar />
      <ScrollToTop smooth width="40" height="32" color="#00979d"/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Notfount />} />
      </Routes>
    </div>
  );
};

export default App;
