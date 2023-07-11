"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";

const Header = () => {
  return (
    <header class="body-font bg-[#222f3e] text-white">
      <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl font-semibold text-white cursor-pointer">
            SAJIDFLIX
          </span>
        </a>
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
              href="/movie"
              className="mr-5 hover:text-blue-200 cursor-pointer"
            >
              Movie
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
