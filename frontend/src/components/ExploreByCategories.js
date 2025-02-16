import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  ebgrocery,
  ebcfruitsandvege,
  ebcpackagedfood,
  ebcfrozenfood,
  ebcmasala,
  ebcsweet,
  ebcpaan,
  ebcbath,
  ebcbiscuits,
  ebcbreakfast,
  ebccleaning,
  ebccolddrink,
  ebcdairy,
  ebcelectricals,
  ebchealth,
  ebchomegrown,
  ebchomeneeds,
  ebchygiene,
  ebcmakeup,
  ebcmeat,
  ebcmuni,
  ebctea,
} from "../assets";

const ExploreByCategories = () => {
  return (
    <div className="w-full mt-12 mb-8">
      <div className="flex flex-row justify-between items-center pb-6 px-4 md:px-12">
        <h2 className="text-lg sm:text-xl font-semibold">Explore By Categories</h2>
        <Link
          to="/allproducts/Fruits"
          className="flex items-center gap-2 font-semibold text-[#FF3269] hover:underline"
        >
          See All
          <BsChevronRight />
        </Link>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 px-4">
        {[ebcfruitsandvege, ebgrocery, ebcmasala, ebcsweet, ebcfrozenfood, ebcpackagedfood].map((imgSrc, index) => (
          <a key={index} href="/allproducts/Fruits" className="transition-transform transform hover:scale-105">
            <img src={imgSrc} alt="category" className="h-[140px] md:h-[200px] rounded-lg shadow-md" />
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 px-4 mt-6">
        {[ebcdairy, ebccolddrink, ebcmuni, ebcmeat, ebcbreakfast, ebctea, ebcbiscuits, ebcmakeup, ebcbath, ebccleaning, ebchomeneeds, ebcelectricals, ebchygiene, ebchealth, ebchomegrown, ebcpaan].map((imgSrc, index) => (
          <a key={index} href="/allproducts/Fruits" className="transition-transform transform hover:scale-105">
            <img src={imgSrc} alt="category" className="h-[122px] md:h-[185px] rounded-lg shadow-md" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExploreByCategories;
