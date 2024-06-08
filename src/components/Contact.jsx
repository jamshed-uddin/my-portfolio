import Title from "./Title";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="  pt-12 lg:pt-16" id="contact">
      <div className="lg:flex  gap-2 ">
        <div className="mb-4 pr-14">
          <Title>Contact</Title>
        </div>
        <div>
          <h1 className="text-2xl">Ideas, Questions or Advice?</h1>
          <h1 className="text-xl">
            I'd love to hear from you! Whether you have an amazing idea that
            needs to come to life, Collaborate on something exciting or got some
            advice for me. Drop me a message. I'm always open to new
            opportunities and connections.
          </h1>
        </div>
      </div>
      {/* contact form and social media */}
      <div className="flex lg:flex-row flex-col  lg:divide-x-2 gap-8 divide-black mt-5 lg:mt-12 mb-8">
        {/* contact form */}
        <div className="lg:w-[60%] w-full lg:order-first order-last">
          <ContactForm />
        </div>

        {/* email,number and socials */}
        <div className="lg:pl-5 lg:w-[40%] w-full h-fit space-y-4">
          {/* email phone */}
          <div
            className="
lg:text-xl text-lg flex flex-col"
          >
            <a href="mailto:jamsheduddin03@gmail.com">
              <h2 className=" underline inline-block">
                jamsheduddin03@gmail.com
              </h2>
            </a>
            <a href="tel:+8801751901166">
              <h2 className=" underline inline-block text-lg">
                +8801751901166
              </h2>
              <span className="text-sm font-light  no-underline">
                {" "}
                (Whatsapp)
              </span>
            </a>
          </div>
          {/* socials */}
          <div className="flex items-center gap-8  mt-2">
            <a
              href={"https://github.com/jamshed-uddin"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href={"https://www.linkedin.com/in/mdjamsheduddin/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-light text-center ">
          2024 &copy; Md Jamshed Uddin
        </h3>
      </div>
    </div>
  );
};

export default Contact;
