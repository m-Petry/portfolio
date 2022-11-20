import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-20">
        <h4 className="text-4xl font-semibold text-center">
          I am <span className="text-lime-600">open for work</span>. <br />
          <span className="decoration-[#F7AB0A]/50 underline">
            Get in touch:
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <FaPhoneAlt className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+55 51 99408 5461</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <FaEnvelope className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">marcelospetry@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <FaMapMarkerAlt className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Porto Alegre, RS - Brasil</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-full md:w-screen md:max-w-4xl md:px-20 mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="E-mail" className="contactInput" type="text" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
