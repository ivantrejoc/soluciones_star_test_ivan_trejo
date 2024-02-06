import Image from "next/image";

const NavBarCrud = () => {
  return (
    <nav className="flex bg-blue-400 text-white top-0 py-3 flex-wrap justify-around bg-silver">

        <div className="w-[200px] h-[40px] flex">
            <Image

            src={"/cantante.png"}
            width={40}
            height={40}
            alt="cantante"
            />
        <h1 className="text-lg font-semibold mt-2" >Singers app</h1>
        </div>
      
      <ul className="flex gap-[40px] text-md mt-2">
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
