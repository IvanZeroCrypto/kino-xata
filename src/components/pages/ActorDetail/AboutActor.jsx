import React from "react";

const AboutActor = ({ text, data = "" }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-1/2">{text}</div>
      <div className="w-1/2">{data}</div>
    </div>
  );
};

export default AboutActor;
