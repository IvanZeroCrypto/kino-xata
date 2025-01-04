import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" container max-w-[1250px] mx-auto px-[10px] ">
      {children}
    </div>
  );
};

export default Container;