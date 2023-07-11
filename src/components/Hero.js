import React from "react";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font bg-blue-100">
      <div class="container mx-auto flex px-10 lg:p-40 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            LET'S WATCH MOVIE
            <br />
            TOGETHER
          </h1>
          <p class="mb-8 leading-relaxed">
            From award-winning dramas to blockbuster action movies, we&apos;ve
            got you covered. Browse our selection of the latest and greatest
            movies, and find your new favorite today.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Explore Movies
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="about1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
