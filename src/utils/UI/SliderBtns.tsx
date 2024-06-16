import ArrowLeft from "@/icons/ArrowLeft";
import React from "react";

interface PropsType {
  prevSlide: () => void;
  nextSlide: () => void;
  scrollLeft: number;
  canScroll: number;
}

const SliderBtns: React.FC<PropsType> = ({
  prevSlide,
  nextSlide,
  canScroll,
  scrollLeft,
}) => {
  return (
    <>
      <div className="absolute top-[50%] translate-y-[-50%] left-0 center">
        <button
          onClick={prevSlide}
          className={`relative top-0 left-[-10px] xl:left-[-30px] rotate-[180deg] bg-primary w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full center ${
            scrollLeft > 0 ? "opacity-1" : "opacity-0"
          }`}
        >
          <ArrowLeft />
        </button>
      </div>

      <div className="absolute top-[50%] translate-y-[-50%] right-0 center">
        <button
          onClick={nextSlide}
          className={`relative top-0 right-[-10px] xl:right-[-30px]  bg-primary w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] xl:w-[50px] xl:h-[50px] rounded-full center ${
            scrollLeft >= canScroll && scrollLeft !== 0
              ? "opacity-0"
              : "opacity-1"
          }`}
        >
          <ArrowLeft />
        </button>
      </div>
    </>
  );
};

export default SliderBtns;
