"use client";

import React from "react";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";

const MenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="relative z-50 lg:hidden "
      onClick={() => setIsOpen((p) => !p)}
    >
      {isOpen ? (
        <span>
          <TfiClose size={20} />
        </span>
      ) : (
        <span>
          <CiMenuFries size={20} />
        </span>
      )}
    </div>
  );
};

export default MenuIcon;
