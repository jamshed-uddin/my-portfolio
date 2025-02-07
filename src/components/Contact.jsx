import Title from "./Title";

import ContactForm from "./ContactForm";

import ProfileLinks from "./ProfileLinks";

const Contact = () => {
  return (
    <div className="  " id="contact">
      <div className="my-grid ">
        <div className="mb-4 lg:pr-14 col-span-3">
          <Title>Contact</Title>
        </div>
        <div className="col-span-9">
          <h1 className="text-lg mb-3">Ideas, Questions or Advice?</h1>
          <h1 className="">
            I&apos;d love to hear from you! Whether you have an amazing idea
            that needs to come to life, Collaborate on something exciting or got
            some advice for me. Drop me a message. I&apos;m always open to new
            opportunities and connections.
          </h1>

          {/* contact form and social media */}
          <div className="flex lg:flex-row flex-col  lg:divide-x-2 gap-8 divide-black mt-5 lg:mt-12 mb-8">
            {/* contact form */}
            <div className="lg:w-[60%] w-full lg:order-first order-last">
              <ContactForm />
            </div>

            {/* email,number and socials */}
            <div className="lg:pl-5 lg:w-[40%] w-full h-fit space-y-2">
              {/* email phone */}
              <div
                className="
  flex flex-col space-y-1"
              >
                <h2 className="  inline-block">jamsheduddin03@gmail.com</h2>

                <h2 className="  inline-block ">+8801751901166</h2>
              </div>
              {/* profiles */}
              <ProfileLinks />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-center ">
          Made with 🍌 by Md Jamshed Uddin
        </h3>
      </div>
    </div>
  );
};

export default Contact;
