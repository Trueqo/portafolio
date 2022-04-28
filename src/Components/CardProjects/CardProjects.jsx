
import React, { useState } from "react";
import technologies from "../../data/technologies";
import Modal from "../Modal/Modal"
import HeaderContProjects from "../HeaderContProjects/HeaderContProjects";

const CardProjects = () => {
  const [data, setData] = useState(technologies)


  function seletcCategori(categoria) {
    if(categoria=='All'){
      setData(technologies)
    }else{
    const filter = technologies.filter(item => item.categori == categoria)
    setData(filter)
    }
  }

  return (
    <div className="mb-10">
      <div className="w-full py-2  rounded-t-xl flex flex-row justify-center">
        <HeaderContProjects seletcCategori={seletcCategori}/>
      </div>
      <div className="grid grid-cols-1  gap-x-3 md:grid-cols-3 lg:grid-cols-4">

        {data.map((datos) => {
          return (
            <div className=" flex flex-col  items-center mt-6 mb-1" key={datos.id}>
              <div className="md:h-[8rem] md:w-[15rem]  w-60 h-36 rounded-t-lg border-2">

              </div>

              <div className="w-60 h-46 md:h-[5rem] md:w-[15] pb-4 bg-white rounded-b-lg flex justify-between items-center">
                <h1 className="pl-4 font-akshar text-xl">{datos.project}</h1>
                <Modal id={datos.id} title={datos.project} description={datos.description} img={datos.img} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardProjects;
