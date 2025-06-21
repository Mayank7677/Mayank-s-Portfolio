import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-10 w-fit px-4 py-6 sm:px-10 sm:py-8 rounded-4xl fixed right-1/2 left-1/2 -translate-x-1/2 bg-[#151515]/99 bg-blur  border border-neutral-800 z-10 flex items-center justify-center gap-3 sm:gap-6 text-lg text-neutral-300">
      <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
        <p>Home</p>
      </Link>
      <Link to={'/play'} onClick={() => window.scrollTo(0, 0)}>
        <p>Playground</p>
      </Link>
      <Link to={"/me"} onClick={() => window.scrollTo(0, 0)}>
        <p>Me</p>
      </Link>
      <Link to={"/connect"} onClick={() => window.scrollTo(0, 0)}>
        <p>Connect</p>
      </Link>
    </div>
  );
};

export default Navbar;
