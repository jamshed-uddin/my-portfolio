"use client";

import Link from "next/link";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import ProfileLinks from "./ProfileLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center lg:py-3 fixed top-0 left-0 right-0 px-3 pb-1  lg:px-16 backdrop-blur-md z-10">
      <div className="lg:flex gap-32 leading-3 lg:leading-normal">
        <Link href={"/"} className=" text-lg">
          Md Jamshed Uddin
        </Link>
        {/*available ping  */}
        <div className="flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          <span className="text-sm  leading-3">
            Available for new opportunity
          </span>
        </div>
      </div>

      <div className="uppercase te">
        {/* icon for mobile nav */}
        <MenuIcon isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        {/* mobile nav */}
        <div
          className={` h-screen w-screen bg-white lg:hidden absolute transition-all duration-500 inset-0 px-4 flex items-end ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-3/5 mt-auto justify-between w-full">
            <ul
              className={` flex flex-col justify-center  text-2xl   font-semibold `}
            >
              <li onClick={() => setIsMenuOpen((p) => !p)}>
                <Link href={"/"} replace>
                  Home
                </Link>
              </li>
              <li onClick={() => setIsMenuOpen((p) => !p)}>
                <Link href={"#projects"} replace>
                  Projects
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
            <div className="flex justify-end pb-6">
              <ProfileLinks />
            </div>
          </div>
        </div>

        {/* desktop nav */}
        <ul className="lg:flex items-center gap-6  hidden text-xs font-medium">
          <li>
            <Link href={"#projects"} replace>
              Projects
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
