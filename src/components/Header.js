"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";

const Header = () => {
  return (
    <header class="body-font bg-[#222f3e] text-white w-full">
      <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center w-full">
        <Link href="/">
          <span class="ml-3 text-xl font-semibold text-white cursor-pointer">
            SAJIDFLIX
          </span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center list-none font-semibold">
          <li>
            <Link href="/" className="mr-5 hover:text-blue-200 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="mr-5 hover:text-blue-200 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/movies"
              className="mr-5 hover:text-blue-200 cursor-pointer"
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
  );
};

export default Header;
