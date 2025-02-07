import Title from "./Title";

const About = () => {
  return (
    <div className="  my-grid" id="about">
      <div className="mb-4 lg:pr-20 col-span-3">
        <Title>About</Title>
      </div>
      <div className=" col-span-9 space-y-10">
        <div className="w-full ">
          <h2 className="hyphens-auto break-words">
            Web developer focused on fron-end love to build intuitive and
            engaging web interfaces.I am also familiar with back-end
            technologies like node js and it&apos;s framework express js and set
            goal to be a full-stack web developer with solid grasp on both
            front-end and back-end. Currently diving deep into node js.
            <span className="mt-3 block">
              Over the year I have used various technology to make some engaging
              and dynamic user interfaces and eager to have grasp on more
              technologies.
            </span>
            <span className="mt-3 block">
              Recently finished developing a real-time chat application. Check
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
        <div className="  w-full   mt-2 ">
          <h2 className="text-lg  mb-1  ">
            Technologies I am skilled and familiar with__
          </h2>
          <div className="">
            <h1>- Javascript, Typescript</h1>
            <h1>
              - Next js, React js, Express js, Node js, Tailwind CSS, Bootstrap,
              Material UI
            </h1>
            <h1>- MongoDB, Mongoose ODM</h1>
            <h1>
              - Socket.io, REST APIs, Git, Axios, React query, React router dom,
              JWT, Stripe
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
