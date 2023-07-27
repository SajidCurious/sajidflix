"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// import Image from "next/image";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <header class="body-font bg-[#222f3e] text-white w-full ">
        <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row w-full">
          <Link href="/">
            <span class="ml-3 text-xl font-semibold text-white cursor-pointer sm:mb-32">
              SAJIDFLIX
            </span>
          </Link>
          <nav class="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center list-none font-semibold space-x-10">
            <li>
              <Link href="/" className=" hover:text-blue-200 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=" hover:text-blue-200 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/movies"
                className=" hover:text-blue-200 cursor-pointer"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="mr-5 hover:text-blue-200 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </nav>
        </div>
      </header>
      <div
        onClick={handleNav}
        className="login flex items-center md:hidden z-10 absolute top-4 right-4 text-white"
      >
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "mobileNav relative top-2 left-0 w-full bg-[#1e272e] flex flex-col justify-center items-center text-center space-y-6 pt-10 pb-10"
        }
      >
        <li>
          <Link href="/" className="cursor-pointer text-white text-2xl">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="cursor-pointer text-white text-2xl ">
            About
          </Link>
        </li>
        <li>
          <Link href="/movies" className="cursor-pointer text-white text-2xl">
            Movies
          </Link>
        </li>
        <li>
          <Link href="/contact" className="cursor-pointer text-white text-2xl">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
