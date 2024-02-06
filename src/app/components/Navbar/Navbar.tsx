import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex absolute mr-[145px]">
      <Image
        className="ml-[135px] mt-[35px]"
        src={"/image-4.png"}
        width={63}
        height={62}
        alt="mother mary logo"
      />
      <div className="flex w-[453px] h-5 ml-[160px] mt-[63px] text-gray-200">
        <a
          href="#"
          className="w-[43px] not-italic font-medium text-base leading-5 text-center text-white mr-[35px]"
        >
          Home
        </a>
        <a href="#" className="w-[44px] not-italic font-medium text-base leading-5 text-center text-white mr-[39px]">Drops</a>
        <a href="#" className="w-[90px] not-italic font-medium text-base leading-5 text-center text-white mr-[40px]">Marketplace</a>
        <a href="#" className="w-[55px] not-italic font-medium text-base leading-5 text-center text-white mr-[37px]">Activity</a>
        <a href="#" className="w-[70px] not-italic font-medium text-base leading-5 text-center text-white">Company</a>
      </div>
      <a href="#" className="w-[164px] h-[53px] mt-[47px] ml-[205px] mr-[90px] border-2 border-amber-300 rounded-2xl text-white not-italic font-normal text-base leading-5 inline-flex items-center justify-center ">Ver en opensea</a>
    </nav>
  );
};

export default Navbar;
