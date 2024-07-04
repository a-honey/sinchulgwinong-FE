"use client";

import AdBanner from "./AdBanner";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import SearchObject from "@/assets/icons/SearchObject";
import banner1 from "@/assets/images/banner1.webp";
import banner2 from "@/assets/images/banner2.webp";
import banner3 from "@/assets/images/banner3.webp";
import { useState } from "react";

const Images = [banner1, banner2, banner3];
const AdBannerSlider = () => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  console.log(currentSrcIndex);
  const onIncreaseIndex = () => {
    if (currentSrcIndex >= Images.length - 1) {
      setCurrentSrcIndex(0);
      return;
    }

    setCurrentSrcIndex((prev) => prev + 1);
  };

  const onDecreaseIndex = () => {
    if (currentSrcIndex === 0) {
      setCurrentSrcIndex(Images.length - 1);
      return;
    }
    setCurrentSrcIndex((prev) => prev - 1);
  };

  return (
    <div className="relative flex w-full justify-between items-center bg-white relative">
      <button
        onClick={onDecreaseIndex}
        className="absolute z-[88] left-[40px] flex justify-center items-center w-[40px] h-[40px] rounded rounded-[50px]"
      >
        <ArrowIcon direction="left" width={9} weight="bold" />
      </button>
      <AdBanner src={Images[currentSrcIndex]} />
      <button
        onClick={onIncreaseIndex}
        className="absolute right-[40px] flex justify-center items-center w-[40px] h-[40px] rounded rounded-[50px]"
      >
        <ArrowIcon direction="right" width={9} weight="bold" />
      </button>
      <SearchObject width={136.67} height={108.27} />
    </div>
  );
};

export default AdBannerSlider;
