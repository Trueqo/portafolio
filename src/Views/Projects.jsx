import React from "react";
import CardProjects from "../Components/CardProjects/CardProjects";
import DataProjects from "../Projects/Projects";

const Projects = () => {
  return (
    <div className="min-h-screen  flex flex-col ">
      <div className="w-full h-min  flex mt-20">
        <h1 className="  text-white font-bold text-5xl mx-auto">
          My projects
        </h1>
      </div>
      <div className=" bg-color2 ">
        <CardProjects/>
      </div>
      
    </div>
  );
};

export default Projects;
