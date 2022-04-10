import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Notfount from "./Pages/Notfount";
const App = () => {
  return (
    <div className="bg-color2 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Notfount />} />
      </Routes>
    </div>
  );
};

export default App;
