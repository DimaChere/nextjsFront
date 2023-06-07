"use client";

import styles from "../../styles/page.module.css";
import { useState, useRef } from "react";
import { ChangeEvent } from "react";

export default function GRegistration() {
  const [inputs, setInputs] = useState({
    name: "",
    venueName: "",
    venueCity: "",
    stateSity: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    venueName: false,
    venueCity: false,
    stateSity: false,
    email: false,
    subject: false,
    message: false,
  });

  function handleError(input: string, isError: boolean) {
    setErrors((prevState) => ({ ...prevState, [input]: isError }));
  }

  function validate() {
    let valid = true;
    if (!inputs.name) {
      handleError("name", true);
      valid = false;
    }
    if (!inputs.venueName) {
      handleError("venueName", true);
      valid = false;
    }
    if (!inputs.venueCity) {
      handleError("venueCity", true);
      valid = false;
    }
    if (!inputs.stateSity) {
      handleError("stateSity", true);
      valid = false;
    }
    if (!inputs.email) {
      handleError("email", true);
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("email", true);
      valid = false;
    }
    if (!inputs.subject) {
      handleError("subject", true);
      valid = false;
    }
    if (!inputs.message) {
      handleError("message", true);
      valid = false;
    }

    if (valid) {
      sendQuestion();
    }
  }

  function sendQuestion() {
    alert(`Сообщение отправлено ${JSON.stringify(inputs)}`);
  }

  return (
    <div className="relative">
      <div className="absolute left-[-20vw] top-20 rounded-full w-[250px] h-[250px] rotate-6 bg-gradient-to-t from-[#F101BF] to-[#0066FF] opacity-30 blur-3xl z-10"></div>
      <div className="absolute right-[-50vw] bottom-[-70vw] rounded-full w-[340px] h-[340px] rotate-6 bg-gradient-to-t from-[#F101BF] to-[#0066FF] opacity-20 blur-3xl z-10"></div>
      <div className=" relative flex flex-col items-center justify-center px-4 my-20 ">
        <h2 className="text-[6vw] font-semibold text-center z-20">
          Get In Touch
        </h2>
        <p className="text-[4vw] w-[90%] text-center z-20">
          Have questions about Noble or just want to say hello? Drop us a line
          and a member of our team will getback to you shortly.
        </p>
      </div>
      <form
        action=""
        className="flex flex-col justify-center items-center mb-8 px-2 z-20"
      >
        {/* Можно упростить стилизацию */}
        <input
          value={inputs.name}
          type="text"
          name="name"
          placeholder="Name"
          className={
            errors.name
              ? "box-border px-2 py-3 rounded-md border-2 border-red-500 text-black w-full mb-3 z-20"
              : "box-border px-2 py-3 rounded-md border-2 border-[#5C5C5C] text-black w-full mb-3 z-20"
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputs({ ...inputs, name: e.target.value })
          }
          onFocus={() => handleError("name", false)}
        />
        <input
          value={inputs.venueName}
          type="text"
          name="venueName"
          placeholder="Venue Name"
          className={
            errors.venueName
              ? "box-border px-2 py-3 rounded-md border-2 border-red-500 text-black w-full mb-3 z-20"
              : "box-border px-2 py-3 rounded-md border-2 border-[#5C5C5C] text-black w-full mb-3 z-20"
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputs({ ...inputs, venueName: e.target.value })
          }
          onFocus={() => handleError("venueName", false)}
        />
        <input
          value={inputs.venueCity}
          type="text"
          name="venueCity"
          placeholder="Venue City"
          className={
            errors.venueCity
              ? "box-border px-2 py-3 rounded-md border-2 border-red-500 text-black w-full mb-3 z-20"
              : "box-border px-2 py-3 rounded-md border-2 border-[#5C5C5C] text-black w-full mb-3 z-20"
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputs({ ...inputs, venueCity: e.target.value })
          }
          onFocus={() => handleError("venueCity", false)}
        />
        <input
          value={inputs.stateSity}
          type="text"
          name="stateSity"
          placeholder="State Sity"
          className={
            errors.stateSity
              ? "box-border px-2 py-3 rounded-md border-2 border-red-500 text-black w-full mb-3 z-20"
              : "box-border px-2 py-3 rounded-md border-2 border-[#5C5C5C] text-black w-full mb-3 z-20"
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputs({ ...inputs, stateSity: e.target.value })
          }
          onFocus={() => handleError("stateSity", false)}
        />
        <input
          value={inputs.email}
          type="text"
          name="email"
          placeholder="Email"
          className={
            errors.email
              ? "box-border px-2 py-3 rounded-md border-2 border-red-500 text-black w-full mb-3 z-20"
              : "box-border px-2 py-3 rounded-md border-2 border-[#5C5C5C] text-black w-full mb-3 z-20"
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputs({ ...inputs, email: e.target.value })
          }
          onFocus={() => handleError("email", false)}
        />
        <input
          value={inputs.subject}
          type="text"
          name="subject"
          placeholder="Subject"
          className={
            errors.subject
              ? "box-border px-2 py-3 rounded-md border-2 border-red-500 text-black w-full mb-3 z-20"
              : "box-border px-2 py-3 rounded-md border-2 border-[#5C5C5C] text-black w-full mb-3 z-20"
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputs({ ...inputs, subject: e.target.value })
          }
          onFocus={() => handleError("subject", false)}
        />
        <textarea
          value={inputs.message}
          name="message"
          placeholder="Message"
          className={
            errors.message
              ? "box-border px-2 py-3 rounded-md border-2 border-red-500 text-black w-full mb-3 z-20"
              : "box-border px-2 py-3 rounded-md border-2 border-[#5C5C5C] text-black w-full mb-3 z-20"
          }
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setInputs({ ...inputs, message: e.target.value })
          }
          onFocus={() => handleError("message", false)}
        />
        {/* <input
          type="submit"
          value="Send"
          onClick={validate}
          className="text-center mt-4 w-full border borer-white rounded-md py-5 font-bold text-xl bg-transparent"
        /> */}
        <div
          onClick={validate}
          className="text-center mt-4 w-full border borer-white rounded-md py-5 font-bold text-xl bg-transparent"
        >
          Send
        </div>
      </form>
    </div>
  );
}
