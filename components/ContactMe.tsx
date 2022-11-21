import React, { useRef } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import emailjs, { init, sendForm } from "emailjs-com";
import { useForm, SubmitHandler } from "react-hook-form";

init("contact_form");

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  // initialization of the connecting of state from react hook form

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_form",
        "template_r0y8wj9",
        form.current,
        "Ca3T0QiC-gtW4LS7m"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Message sent successfully! I will answer you as soon as possible."
          );
        },
        (error) => {
          console.log(error.text);
          alert("There was an error. Can you try again?");
        }
      );
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] indent-5 text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-20 scale-90 md:scale-100">
        <h4 className="text-4xl font-semibold text-center">
          I{"'"}m <span className="text-lime-600">open to work</span>. <br />
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
        {/* connect form with react hook form (onSubmit) */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-full md:w-screen md:max-w-4xl md:px-20 mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput"
              name="user_name"
              type="text"
            />
            <input
              placeholder="E-mail"
              className="contactInput"
              type="email"
              name="user_email"
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            name="subject"
            type="text"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contactInput"
          />
          <input
            type="submit"
            value="Send"
            className="bg-[#F7AB0A] hover:bg-yellow-600 py-5 px-10 rounded-md text-black font-bold text-lg"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
