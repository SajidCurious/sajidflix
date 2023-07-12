import React from "react";

const page = ({ params }) => {
  const id = params.id;
  return <div>I am dynamic route{id}</div>;
};

export default page;
