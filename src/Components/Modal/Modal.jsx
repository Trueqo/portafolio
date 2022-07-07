import React, { useState } from "react";
import { FaRegEye } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineChrome } from 'react-icons/ai';
import technologies from "../../data/technologies";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(technologies);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-900 font-bold  text-sm px-4 py-2 rounded shadow hover:shadow-lg mr-4 my-4"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FaRegEye />
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <span className="text-4xl font-akshar font-bold">
                    {props.title}
                  </span>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="w-full bg-color2 flex justify-center  ">
                  
                  <video className='object-cover w-[20rem] h-[15rem] md:w-full md:h-[20rem]'
                  autoPlay muted>
                    <source src={props.video} type="video/mp4" />
                  </video>

                </div>
                <div className="relative p-1 flex-auto px-4">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {props.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">

                  <div className="w-10 h-auto flex flex-row gap-4" >
                      <a className="text-4xl cursor-pointer" href={props.linkR} target="_blank">
                        <AiFillGithub/>
                      </a>
                      <a className="text-4xl cursor-pointer" href={props.linkD} target="_blank">
                        <AiOutlineChrome/>
                      </a>
                  </div>

                  <button
                    className="text-red-600 bg-red-400 rounded-xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}