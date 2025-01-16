import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 flex flex-col justify-center items-center text-white bottom-0 fixed w-full">
      <div className="logo text-white font-bold text-2xl">
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500">OP/ &gt;</span>
      </div>
      <div className="font-bold text-md">Created by Raghav</div>
    </div>
  );
};

export default Footer;
