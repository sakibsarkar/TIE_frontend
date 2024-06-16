"use client";
import SliderBtns from "@/utils/UI/SliderBtns";
import { NextSlide, PrevSlide } from "@/utils/func/slides";
import React, { MouseEvent, useRef, useState } from "react";
import ProductCard from "../UI/ProductCard";

const ProductSlider: React.FC<{ title: string }> = ({ title }) => {
  const slider = useRef<HTMLDivElement>(null);

  // scrolled ammount
  const [scrollLeft, setScrollLeft] = useState<number>(
    slider.current?.scrollLeft || 0
  );

  // mouse dragging states
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollStartX, setScrollStartX] = useState<number>(0);

  // total scrollable  ammount
  const canScroll = slider.current?.scrollWidth || 0;

  // next slides
  const nextSlide = () => {
    const element = slider.current;
    if (element) {
      // --** 15 => is the gap between every card
      const srollAmmount = NextSlide(element, 15);
      setScrollLeft(srollAmmount || 0);
    }
  };

  // prev slide
  const prevSlide = () => {
    const element = slider.current;
    if (element) {
      // --** 15 => is the gap between every card
      const srollAmmount = PrevSlide(element, 15);
      setScrollLeft(srollAmmount || 0);
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - slider.current!.offsetLeft);
    setScrollStartX(slider.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - slider.current!.offsetLeft;
    const walkX = x - startX;
    slider.current!.scrollLeft = scrollStartX - walkX;
    setScrollLeft(scrollStartX - walkX);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-[15px] w-full">
      <div className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col gap-[20px]">
        <h3 className="text-[26px] font-[600] text-primaryTxt">{title}</h3>
        <div className="relative w-full">
          <div
            className="cursor-grab w-full overflow-x-auto flex gap-[15px] noScrollBar scroll-smooth "
            ref={slider}
            style={{ userSelect: "none" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {/* {serviceData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))} */}
            {Array.from({ length: 20 }).map((service, i) => (
              <ProductCard key={i + "product"} />
            ))}
          </div>

          <SliderBtns
            canScroll={canScroll}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            scrollLeft={scrollLeft}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
