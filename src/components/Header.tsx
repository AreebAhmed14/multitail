"use client";
import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import Link from "next/link";
import { ImCross } from "react-icons/im";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    {
      if (isMenuOpen == false) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    }
  };
  function remove(){
    setIsMenuOpen(false);
  }

  return (
    <div
      id="home"
      className="w-full h-[15vh] flex justify-between items-center bg-black"
    >
      <h1 className="ml-5 text-[2.5rem] max-[809px]:text-[2.1rem] max-[400px]:text-[2rem] max-[400px]:ml-3 max-[350px]:text-[1.8rem] font-sans text-white font-bold">
        <span className="text-red-800">FIT</span>NESS{" "}
        <span className="text-red-800">HUB</span>
      </h1>
      <ul className="flex m-[1rem] max-[790px]:hidden">
        <Link href={"/"}>
          <li className="m-5 text-[1.5rem] transition-all hover:scale-[1.2] hover:text-red-800 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white">
            Home
          </li>
        </Link>
        <Link href={"/About"}>
          <li className="m-5 text-[1.5rem] transition-all hover:scale-[1.2] hover:text-red-800 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white">
            About
          </li>
        </Link>
        <Link href={"/Pakages"}>
          <li className="m-5 text-[1.5rem] transition-all hover:scale-[1.2] hover:text-red-800 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white">
            Memberships
          </li>
        </Link>
        <Link href={"/Contact"}>
          <li className="m-5 text-[1.5rem] transition-all hover:scale-[1.2] hover:text-red-800 duration-700 cursor-pointer font-sans font-bold max-[930px]:text-[1.1rem] text-white">
            Contact
          </li>
        </Link>
      </ul>

      {/* Mobile Menu Icon */}
      <TiThMenuOutline
        onClick={toggleMenu}
        className="text-[2.2rem] font-bold hidden max-[790px]:block max-[400px]:text-[1.9rem] max-[350px]:text-[1.7rem] cursor-pointer mr-5 text-white"
      />

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } z-10 w-full h-[100vh] transition-all duration-[2s] bg-black absolute top-0 left-0`}
      >
        <div className="w-full h-[15vh] flex justify-end items-center bg-black bg-opacity-40 border-b-[0.3rem] border-red-800">
          <ImCross onClick={toggleMenu} className="mr-6 text-2xl text-white" />
        </div>

        <ul className="flex justify-center items-center flex-col">
          <Link href={"/"}>
            <li onClick={remove} className="w-full h-[15vh] flex justify-center items-center font-bold text-white border-b-[0] border-white my-3.5 text-2xl font-sans">
              HOME
            </li>
          </Link>
          <Link href={"/About"}>
            <li onClick={remove} className="w-full h-[15vh] flex justify-center items-center font-bold text-white border-b-[0] border-white my-3.5 text-2xl font-sans">
              ABOUT
            </li>
          </Link>
          <Link href={"/Pakages"}>
            <li onClick={remove} className="w-full h-[15vh] flex justify-center items-center font-bold text-white border-b-[0] border-white my-3.5 text-2xl font-sans">
              MEMBERSHIPS
            </li>
          </Link>
          <Link href={"/Contact"}>
            <li onClick={remove} className="w-full h-[15vh] flex justify-center items-center font-bold text-white border-b-[0] border-white my-3.5 text-2xl font-sans">
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
