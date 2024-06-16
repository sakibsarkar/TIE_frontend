import { merienda, tenor } from "@/utils/UI/fonts";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-[1600px] hero h-[70vh] flex items-center justify-start mt-[20px]">
      <div className="flex flex-col gap-[10px] px-[15px]">
        <h1
          className={`text-[65px] w-[660px] font-[600] leading-[1.3] text-white ${merienda.className}`}
        >
          The trend Of the <br />
          Season
        </h1>
        <p className="text-[12px] text-white max-w-[660px]">
          Discover the trend of the season at TIE, where sophistication meets
          modernity. Our curated collection offers the finest in men’s fashion,
          ensuring you stay ahead of the style curve. From impeccably tailored
          suits to chic casual wear, each piece is crafted with precision and
          designed to make a statement
        </p>

        <Link
          href={"/"}
          className={`text-[white] ${tenor.className} btnUnderLine text-[18px] `}
        >
          Shop In
        </Link>
      </div>
    </div>
  );
};

export default Hero;
