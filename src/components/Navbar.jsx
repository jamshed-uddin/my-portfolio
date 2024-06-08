const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:py-3 fixed top-0 left-0 right-0 px-3 lg:px-16 backdrop-blur-lg">
      <div className="lg:flex gap-32 leading-3 lg:leading-normal">
        <h1 className=" text-lg">Md Jamshed Uddin</h1>
        {/*available ping  */}
        <div className="flex items-center gap-1 ">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          <span>Available for new opportunity</span>
        </div>
      </div>

      <div>
        <ul className="lg:flex items-center gap-6  hidden ">
          <li>Work</li>
          <li>About </li>
          <li>Contact </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
