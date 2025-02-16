import React from "react";
import {
  carousalone,
  carousaltwo,
  carousalthree,
  carousalfour,
  carousalfive,
  carousalsix,
  carousalseven,
} from "../assets";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Carousal = () => {
  const sliderLeft = () => {
    const slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    const slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="w-full flex items-center justify-center">
      <MdChevronLeft
        onClick={sliderLeft}
        className="text-[40px] text-black ml-10 cursor-pointer opacity-50 hover:opacity-100 mt-6 md:mt-36"
      />
      <div
        id={"slider1"}
        className="mt-8 flex gap-6 cursor-pointer relative flex-nowrap items-center w-full max-w-[1350px] h-full overflow-x-auto scroll-smooth"
      >
        <img src={carousalone} alt="carousalone" className="h-[250px]" />
        <img src={carousaltwo} alt="carousaltwo" className="h-[250px]" />
        <img src={carousalthree} alt="carousalthree" className="h-[250px]" />
        <img src={carousalfour} alt="carousalfour" className="h-[250px]" />
        <img src={carousalfive} alt="carousalfive" className="h-[250px]" />
        <img src={carousalsix} alt="carousalsix" className="h-[250px]" />
        <img
          src={carousalseven}
          alt="carousalseven"
          className="rounded-xl h-[250px]"
        />
      </div>
      <MdChevronRight
        onClick={sliderRight}
        className="text-[40px] text-black ml-2 cursor-pointer opacity-50 hover:opacity-100 mt-6 md:mt-36"
      />
    </div>
  );
};

export default Carousal;
