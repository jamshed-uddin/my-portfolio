import Title from "./Title";

const About = () => {
  return (
    <div className="lg:flex  gap-2 " id="about">
      <div className="mb-4 pr-20">
        <Title>About</Title>
      </div>
      <div className="lg:flex lg:divide-x-2 divide-black gap-4">
        <div className="lg:w-[60%] w-full ">
          <h2 className="text-xl hyphens-auto break-words">
            Hello__ I am Md Jamshed Uddin.As a web developer focused on fron-end
            I love to build intuitive and engaging web interfaces.I am also
            familiar with back-end technology like node js and it's framework
            express js and set goal to be a full-stack web developer with solid
            grasp on both front-end and back-end.Over the year I have used
            various technology to make some engaging and dynamic user interfaces
            and eager to have grasp on more technologies.Currently wrapping up a
            real-time chat application I was making.
          </h2>
        </div>
        <div className="text-xl lg:w-[40%] w-full shrink-0 lg:pl-4 mt-2 lg:mt-0">
          <h2 className="text-2xl mb-2">
            Technologies I am skilled and familiar with__
          </h2>
          <div>
            <h1> Javascript</h1>
            <h1>
              React js, Express js, Node js, Tailwind CSS, Bootstrap, Material
              UI
            </h1>
            <h1> MongoDB , Mongoose ODM</h1>
            <h1>
              Socket.io, REST APIs, Git,Axios, React query, React router dom,
              JWT, Stripe
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
