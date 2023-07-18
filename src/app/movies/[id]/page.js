import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9f60731615mshb634896df8a3394p19d915jsn14105988137b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  return (
    <div className="w-full h-full sm:w-1/2 md:w-2/4 items-center md:mx-auto py-4 px-2 ">
      <h2 className="">
        {" "}
        <span className="text-2xl font-bold pb-4"> {main_data.type} </span>{" "}
      </h2>
      <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden sm:px-10 md:px-0">
        <div>
          <Image
            className="w-full"
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={600}
            height={300}
          />
        </div>
        <div className="px-4 py-4">
          <h1 className="text-lg font-semibold pb-2">{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
