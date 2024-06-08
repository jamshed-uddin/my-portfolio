"use client";

import Link from "next/link";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex justify-between items-center lg:py-3 fixed top-0 left-0 right-0 px-3 lg:px-16 backdrop-blur-md">
      <div className="lg:flex gap-32 leading-3 lg:leading-normal">
        <h1 className=" text-lg">Md Jamshed Uddin</h1>
        {/*available ping  */}
        <div className="flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          <span className="text-sm lg:text-base leading-3">
            Available for new opportunity
          </span>
        </div>
      </div>

      <div>
        {/* icon for mobile nav */}
        <MenuIcon isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        {/* mobile nav */}
        <ul
          className={`lg:hidden absolute h-screen w-screen bg-white flex flex-col justify-center text-6xl gap-5 pl-4 font-bold transition-all duration-500 ${
            isMenuOpen ? "inset-0" : "top-0 bottom-0 left-96"
          }`}
        >
          <li onClick={() => setIsMenuOpen((p) => !p)}>
            <Link href={"/"} replace>
              Home
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen((p) => !p)}>
            <Link href={"#work"} replace>
              Work
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen((p) => !p)}>
            <Link href={"#about"} replace>
              About
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen((p) => !p)}>
            <Link href={"#contact"} replace>
              Contact
            </Link>
          </li>
        </ul>

        {/* desktop nav */}
        <ul className="lg:flex items-center gap-6  hidden ">
          {pathname !== "/" && (
            <li>
              <Link href={"#work"} replace>
                Work
              </Link>
            </li>
          )}
          <li>
            <Link href={"#work"} replace>
              Work
            </Link>
          </li>
          <li>
            <Link href={"#about"} replace>
              About
            </Link>
          </li>
          <li>
            <Link href={"#contact"} replace>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
