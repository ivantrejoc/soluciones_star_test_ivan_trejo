import React from "react";

const NavBarCrud = () => {
  return (
    <nav className="flex bg-blue-400 text-white top-0 py-3 flex-wrap justify-around bg-silver">
      <h1 className="text-lg font-semibold">Singers app</h1>
      <ul className="flex gap-[40px] text-m">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/create">Create Singer</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarCrud;
