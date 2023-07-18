import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 p-4 md:w-1/5">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={curElem.jawSummary.backgroundImage.url}
                alt="title"
                width={300}
                height={200}
                className="w-full"
              ></Image>
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  {title}
                </h1>
                <p class="leading-relaxed mb-3">{synopsis}</p>
                <div class="flex items-center flex-wrap ">
                  <Link href={`/movies/${id}`}>
                    <button class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCard;
