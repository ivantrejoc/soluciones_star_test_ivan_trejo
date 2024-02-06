import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Image
        className="absolute ml-40 mt-8"
        src={"/image-4.png"}
        width={63}
        height={62}
        alt="mother mary logo"
      />
      <div className="absolute flex w-[453px] h-5 left-[573px] top-[63px] text-gray-200 gap-10">
        <a
          href="#"
          className="not-italic font-medium text-base leading-5 text-center text-white"
        >
          Home
        </a>
        <a href="#" className="not-italic font-medium text-base leading-5 text-center text-white">Drops</a>
        <a href="#" className="not-italic font-medium text-base leading-5 text-center text-white">Marketplace</a>
        <a href="#" className="not-italic font-medium text-base leading-5 text-center text-white">Activity</a>
        <a href="#" className="not-italic font-medium text-base leading-5 text-center text-white">Company</a>
      </div>
      <a href="#" className="absolute w-[164px] h-[53px]  top-[47px] border-2 border-amber-300 rounded-2xl text-white not-italic font-normal text-base leading-5 inline-flex items-center justify-center left-[1350px] right-[165px]">Ver en opensea</a>
    </nav>
  );
};

export default Navbar;
