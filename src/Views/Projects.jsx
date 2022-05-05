import React from "react";

import ContProjects from '../Components/ContProjects/ContProjects'
const Projects = () => {
  return (
    <div className="min-h-screen  flex flex-col " id="projects">
      
        <h1 className="  text-white font-bold text-5xl mx-auto mt-[2rem]">
          My projects
        </h1>

        <ContProjects/>
      
    </div>
  );
};

export default Projects;
