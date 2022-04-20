import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [emailDone, setEmailDone] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_wretuzz",
        "template_9geiklo",
        event.target,
        "VlN1VDdTMX8qqSbrs"
      )
      .then((res) => {
        console.log(res);
        setEmailDone(true);
        setTimeout(()=>{
          setEmailDone(false)
        },5000)
      })
      .catch((error) => console.log(error));
      event.target.reset();
  };

  return (
    <div className="relative justify-center items-center text-center">
      <span className="text-4xl font-bold text-color1">CONTACT ME !</span>
      <form
        className="flex flex-col bg-white  h-[20rem] rounded-2xl mt-5 shadow-md px-10 md:px-[2rem] justify-center gap-5  relative md:w-96"
        onSubmit={sendEmail}
      >
        <input
          type="Text"
          name="user_name"
          placeholder="Name"
          className="border-2 border-color2 rounded-md pl-2"
        ></input>
        <input
          type="Text"
          name="user_company"
          placeholder="Company"
          className="border-2 border-color2 rounded-md pl-2"
        ></input>
         <input
          type="correo"
          name="user_correo"
          placeholder="Email"
          className="border-2 border-color2 rounded-md pl-2 text-color1"
        ></input>
        <textarea
          name="user_message"
          placeholder="additional message"
          className="border-2 border-color2 rounded-md pl-2"
        ></textarea>
        <input
          type="submit"
          className="w-[6rem] h-[1.9rem] absolute bottom-[-2.5rem]  bg-color1 text-white rounded-xl"
        ></input>
        
        {emailDone && (
          <div className="bg-green-400 text-black h-10 rounded-xl flex items-center align-middle p-2">
            Mensaje enviado con éxito.
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
