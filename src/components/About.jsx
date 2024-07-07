import Title from "./Title";

const About = () => {
  return (
    <div className="lg:flex  gap-2  pt-12 lg:pt-16" id="about">
      <div className="mb-4 lg:pr-20">
        <Title>About</Title>
      </div>
      <div className="lg:flex lg:divide-x-2 divide-black gap-4">
        <div className="lg:w-[60%] w-full ">
          <h2 className="text-lg hyphens-auto break-words">
            Hello__ I am Md Jamshed Uddin.Web developer focused on fron-end who
            love to build intuitive and engaging web interfaces.I am also
            familiar with back-end technologies like node js and it&apos;s
            framework express js and set goal to be a full-stack web developer
            with solid grasp on both front-end and back-end.
            <span className="mt-3 block">
              Over the year I have used various technology to make some engaging
              and dynamic user interfaces and eager to have grasp on more
              technologies.
              <a
                className="w-fit underline text-lg cursor-pointer"
                href="https://drive.google.com/file/d/1WVkoYKNe8F9_VIU02x8RsJr27uPHXBzX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                My resume
              </a>
            </span>
            <span className="mt-3 block">
              Recently finished developing a real-time chat application.Check
              out the{" "}
              <a
                href="https://fax-pbi7.onrender.com/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site
              </a>
              {"  "}
              <span>and</span>
              {"  "}
              <a
                href="https://github.com/jamshed-uddin/Fax_"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github repo
              </a>
            </span>
          </h2>
        </div>
        <div className="text-lg lg:w-[40%] w-full shrink-0 lg:pl-4 mt-2 lg:mt-0">
          <h2 className="text-xl mb-3">
            Technologies I am skilled and familiar with__
          </h2>
          <div>
            <h1>Javascript</h1>
            <h1>
              React js, Express js, Node js, Tailwind CSS, Bootstrap, Material
              UI
            </h1>
            <h1>MongoDB, Mongoose ODM</h1>
            <h1>
              Socket.io, REST APIs, Git, Axios, React query, React router dom,
              JWT, Stripe
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
