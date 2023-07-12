import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import React from "react";

const page = async () => {
  const url = process.env.API_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9f60731615mshb634896df8a3394p19d915jsn14105988137b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
    <section class="bg-[#fff]">
      <div className="max-w-[140rem] mx-0 my-auto px-[6rem] py-[3rem]">
        <h1>Series & Movies</h1>
        {main_data.map((curElem) => {
          return <MovieCard key={curElem.id} {...curElem} />;
        })}
      </div>
    </section>
  );
};

export default page;
