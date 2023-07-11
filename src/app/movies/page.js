import React from "react";

const page = () => {
  const url = process.env.API_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9f60731615mshb634896df8a3394p19d915jsn14105988137b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  return <div>movies</div>;
};

export default page;
