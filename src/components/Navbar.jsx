import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
      <div className="flex justify-between items-center px-4 py-5 h-14 mycontainer">
        <div className="logo font-bold text-3xl">
          <span className="text-highlight">&lt;</span>
          Crypt
          <span className="text-highlight"> X/ &gt;</span>
        </div>
        <button className="btn-primary flex justify-center items-center my-5 ring-1 ring-white">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-8 invert p-1" alt="github logo" />
          <span onClick={() => window.open("https://github.com/Raghavaggarwal2", "_blank")} className="px-3">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
