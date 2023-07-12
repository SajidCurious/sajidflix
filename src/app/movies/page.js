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
  console.log(data);

  return (
    <>
      <h1>movies</h1>
      <Link href="/movies/hhhhhh">go to</Link>
    </>
  );
};

export default page;
