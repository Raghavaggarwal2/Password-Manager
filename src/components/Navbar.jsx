import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="flex justify-between items-center px-4 py-5 h-14 mycontainer">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/ &gt;</span>
        </div>
        <button className="text-white bg-green-600 rounded-full flex justify-center items-center my-5 ring-1 ring-white">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-10 invert p-1" alt="github logo" />
            <span className="font-bold px-3">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
