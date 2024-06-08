const ContactForm = () => {
  const inputStyle =
    "border-b-[1.4px] border-black px-5 py-2  w-full mt-1  focus:outline-none bg-white text-xl";
  return (
    <div>
      <div className="lg:flex items-center gap-4">
        <div className="w-full">
          <label htmlFor="" className="text-xl  block">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className={inputStyle}
            name="email"
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="text-xl  block">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email address"
            className={inputStyle}
            name="email"
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
          className={`${inputStyle} resize-none min-h-32`}
          name="message"
        />
      </div>
      <div className="text-center mt-1">
        <button className="text-2xl  bg-black text-white px-4 py-1 rounded-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
