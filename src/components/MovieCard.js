"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;
  return (
    <>
      <section class="text-gray-600 body-font py-4">
        <div class="container p-5">
          <div class="-m-4 p-4 md:max-w-sm">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                src={curElem.jawSummary.backgroundImage.url}
                alt="title"
                width={300}
                height={200}
                className="w-full"
              ></Image>
              <div class="p-6">
                <h1 class="title-font text-lg font-bold text-gray-900 mb-3">
                  {title.substring(0, 18)}
                </h1>
                <p class="leading-relaxed mb-3">{`${synopsis.substring(
                  0,
                  90
                )}  .....`}</p>
                <div class="flex items-center flex-wrap ">
                  <Link href={`/movies/${id}`}>
                    <button class="text-white bg-black px-4 py-1.5 hover:bg-white hover:text-black border-black hover:border hover:border-black inline-flex items-center md:mb-2 lg:mb-0 rounded-2xl font-medium">
                      Read More
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
