import Image from "next/image";
import Navbar from "../Navbar/Navbar";

const Figma = () => {
  return (
    <main className="bg-teal-950  text-gray-200 w-full  h-[3977px] top[-513px] left-[5426px]">
      <div className="bg-[url('/vector-138.svg')] bg-cover w-[2241px] h-[1001px]">
        <div className="bg-[url('/stars.png')] bg-cover w-[2241px] h-[1001px]">
          <Navbar />
          <div className="flex w-full h-[647px] absolute mt-[160px]">
            <div className="relative">
              <h1 className="bg-[url('/ellipse-1551.png')] bg-[right_36rem_bottom_0.1rem] bg-no-repeat w-[961px] h-[252px] text-[95px] uppercase font-extrabold leading-[84px] tracking-tighter text-left ml-[147px] mt-[63px]">
                Collect
                <br />
                Mother Mary <br />
                art nft
              </h1>

              <p
                className="ml-[147px] mt-[25px] text-xl font-normal leading-[30px] tracking-[0px] text-left;
  font-family: Outfit;"
              >
                Find the best upcoming and live NFT drops. Moonly provides
                <br />
                analytics to help you make good NFT investments.
              </p>
              <a
                href="#"
                className="bg-gradient-to-t from-yellow-500 via-amber-300 to-amber-300 absolute w-[216px] h-[66px] mt-[31px] ml-[147px] text-neutral-800 inline-flex items-center justify-center rounded-[15px] text-base font-bold leading-5 tracking-[0px] text-center"
              >
                VER EN OPENSEA
              </a>
            </div>
            <div className="w-[512px] h-[647px]">
              <Image
                src={"/virgin-2-4.png"}
                height={647}
                width={512}
                alt="virgin"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Figma;
