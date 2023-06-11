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
      <div className="absolute -left-[20vw] top-20 w-[250px] h-[250px] rotate-6 bg-gradient-to-t from-[#F101BF] to-[#0066FF] opacity-30 blur-[150px] z-10 sm:top-0 sm:left-[332px]"></div>
      <div className="absolute -right-[50vw] -bottom-[70vw] w-[340px] h-[340px] rotate-6 bg-gradient-to-t from-[#F101BF] to-[#0066FF] opacity-20 blur-[80px] z-10 sm:-right-[100px] sm:bottom-0"></div>
      <div className=" relative flex flex-col items-center justify-center px-4 my-20 sm:w-[620px] sm:mx-auto sm:text-center">
        <h2 className={styles.headline}>Get In Touch</h2>
        <p className={styles.content}>
          Have questions about Noble or just want to say hello? <br /> Drop us a
          line and a member of our team will getback to you shortly.
        </p>
      </div>
      <form
        action=""
        className="flex flex-col justify-center items-center mb-8 px-2 z-20 sm:w-[818px] sm:mx-auto"
      >
        {/* Можно упростить стилизацию */}
        <input
          value={inputs.name}
          type="text"
          name="name"
          placeholder="Name"
          className={errors.name ? styles.inputError : styles.input}
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
          className={errors.venueName ? styles.inputError : styles.input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputs({ ...inputs, venueName: e.target.value })
          }
          onFocus={() => handleError("venueName", false)}
        />
        <div className="w-full flex flex-col sm:flex-row sm:justify-between">
          <input
            value={inputs.venueCity}
            type="text"
            name="venueCity"
            placeholder="Venue City"
            className={
              errors.venueCity ? styles.inputSmallError : styles.inputSmall
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
              errors.stateSity ? styles.inputSmallError : styles.inputSmall
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, stateSity: e.target.value })
            }
            onFocus={() => handleError("stateSity", false)}
          />
        </div>

        <input
          value={inputs.email}
          type="text"
          name="email"
          placeholder="Email"
          className={errors.email ? styles.inputError : styles.input}
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
          className={errors.subject ? styles.inputError : styles.input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputs({ ...inputs, subject: e.target.value })
          }
          onFocus={() => handleError("subject", false)}
        />
        <textarea
          value={inputs.message}
          name="message"
          placeholder="Message"
          className={errors.message ? styles.textareaError : styles.textarea}
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
          className="box-border text-center mt-4 w-full border borer-white rounded-md py-5 font-bold text-xl bg-transparent sm:w-[398px] sm:text-[24px] sm:py-[26px] sm:mt-[38px] sm:bg-gradient-to-tr sm:hover:from-[#f101bd5c] sm:hover:to-[#0066ff5c] sm:active:opacity-40 "
        >
          Send
        </div>
      </form>
    </div>
  );
}
