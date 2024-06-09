"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [senderInfo, setSenderInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [errorText, setErrorText] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [emailSendSuccess, setEmailSendSuccess] = useState("");

  const handleOnChange = (e) => {
    setErrorText("");
    setIsError({ name: false, email: false, message: false });
    const name = e.target.name;
    const value = e.target.value;

    setSenderInfo((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmailHandler = async (e) => {
    e.preventDefault();

    if (!senderInfo.name) {
      setIsError((p) => ({ ...p, name: true }));
      setErrorText("Please fill out the name field");
      return;
    }
    if (!senderInfo.email) {
      setIsError((p) => ({ ...p, email: true }));
      setErrorText("Please fill out the email field");
      return;
    }
    if (!senderInfo.message) {
      setIsError((p) => ({ ...p, message: true }));
      setErrorText("Please fill out the message field");
      return;
    }

    const templateParams = {
      from_name: senderInfo.name,
      from_email: senderInfo.email,
      to_name: "Md Jamshed Uddin",
      message: senderInfo.message,
    };

    setEmailSending(true);
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      )
      .then(() => {
        setEmailSending(false);
        setEmailSendSuccess("Message send successfully");
        setSenderInfo({
          name: "",
          email: "",
          message: "",
        });
        let timeId;
        clearTimeout(timeId);

        timeId = setTimeout(() => {
          setEmailSendSuccess("");
        }, 3000);
      })
      .catch((error) => {
        setEmailSending(false);
        setErrorText("Something went wrong!");
      });
  };

  const inputStyle =
    " pr-5 py-2  w-full mt-1  focus:outline-none bg-white text-xl";
  return (
    <div>
      <form onSubmit={sendEmailHandler}>
        <div className="lg:flex items-center gap-4">
          <div className="w-full">
            <label htmlFor="" className="text-xl  block">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className={`${inputStyle} ${
                isError.name
                  ? "border-b-[1.4px] border-red-500"
                  : "border-b-[1.4px] border-black"
              }`}
              name="name"
              value={senderInfo.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-xl  block">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className={`${inputStyle} ${
                isError.email
                  ? "border-b-[1.4px] border-red-500"
                  : "border-b-[1.4px] border-black"
              }`}
              name="email"
              value={senderInfo.email}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="w-full lg:mt-4">
          <label htmlFor="" className="text-xl block">
            Message
          </label>
          <textarea
            type="text"
            placeholder="Your message"
            className={` resize-none min-h-32 ${inputStyle} ${
              isError.message
                ? "border-b-[1.4px] border-red-500"
                : "border-b-[1.4px] border-black"
            }`}
            name="message"
            value={senderInfo.message}
            onChange={handleOnChange}
          />
        </div>
        {errorText && <span className="  text-red-600">{errorText}</span>}
        {emailSendSuccess && (
          <span className="  text-green-600">{emailSendSuccess}</span>
        )}
        <div className="text-center mt-1">
          <button
            type="submit"
            className="text-2xl  bg-black text-white px-4 py-1 rounded-md active:scale-95"
          >
            {emailSending ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
