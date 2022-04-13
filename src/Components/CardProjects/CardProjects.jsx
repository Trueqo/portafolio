
import React from "react";
import DataProjects from "../../Projects/Projects";
import Modal from "../../Components/Modal/Modal"
const CardProjects = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2">
      {DataProjects.map((datos) => {
        return (
          <div className=" flex flex-col  items-center mt-12 mb-5 ">
            <div className="md:h-[8rem] md:w-[15rem]  w-60 h-36   rounded-t-lg border-2">
              
            </div>

            <div className="w-60 h-46 md:h-[5rem] md:w-[15] pb-4 bg-white rounded-b-lg flex justify-end">
              <Modal/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProjects;
