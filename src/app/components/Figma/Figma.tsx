import Image from "next/image";
import Navbar from "../Navbar/Navbar";

const Figma = () => {
  return (
    <section className="bg-teal-950 text-gray-200 w-full  h-fit top[-513px]">
      <div className="bg-[url('/vector-138.svg')] bg-cover w-full h-fit">
        <div className="bg-[url('/stars.png')] bg-cover  w-full h-[840px]">
          <Navbar />
          <div className="flex w-full h-fit absolute mt-[160px] justify-center">
            <div className="relative w-[580px] ml[147px] justify-start">
              <h1 className="bg-[url('/ellipse-1551.png')] bg-[right_40rem_bottom_0.1rem] bg-no-repeat w-[961px] h-[252px] text-[70px] uppercase font-extrabold leading-[84px] tracking-tighter text-left mt-[63px]">
                Collect
                <br />
                Mother Mary <br />
                art nft
              </h1>

              <p
                className="mt-[25px] text-[15px] font-normal leading-[30px] tracking-[0px] text-left;
  font-family: Outfit;"
              >
                Find the best upcoming and live NFT drops. Moonly provides
                <br />
                analytics to help you make good NFT investments.
              </p>
              <a
                href="#"
                className="bg-gradient-to-t from-yellow-500 via-amber-300 to-amber-300 absolute w-[216px] h-[66px] mt-[31px] text-neutral-800 inline-flex items-center justify-center rounded-[15px] text-base font-bold leading-5 tracking-[0px] text-center"
              >
                VER EN OPENSEA
              </a>
              <div className="w-11 h-[50.54px] ml-[-40px] mt-[85px]">
                <Image
                src={"/rays.png"}
                width={44}
                height={50.54}
                alt="rays"
                />
              </div>
            </div>
            <div className="w-[512px] h-[647px] ml-2">
              <Image
                src={"/virgin-2-4.png"}
                height={647}
                width={512}
                alt="virgin"
              />
              <div className="w-14 h-14 ml-[525px] mt-[-120px]">
                <Image
                src={"/stars2.png"}
                width={56}
                height={56}
                alt="stars"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Figma;
