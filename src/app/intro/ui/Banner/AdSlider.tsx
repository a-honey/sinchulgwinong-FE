"use client";

import AdBanner from "./AdBanner";
import AdBannerSlider from "./AdBannerSlider";
import AdSlide from "./AdSlide";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import SearchObject from "@/assets/icons/SearchObject";
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import banner3 from "@/assets/images/banner3.png";
import getAdJobInfoPosts from "@/api/job-info/getAdJobInfoPosts";
import useUpdateFetch from "@/hooks/useUpdateFetch";

const AdSlider = () => {
  const { data } = useUpdateFetch(getAdJobInfoPosts);

  const hi = true;
  if (hi) return <AdBannerSlider />;
  return (
    <div className="relative flex w-full h-[200px] py-[40px] px-[120px] justify-between items-center bg-gray1 relative">
      <button className="absolute z-[88] left-[40px] flex justify-center items-center bg-gray2 w-[40px] h-[40px] rounded rounded-[50px]">
        <ArrowIcon direction="left" width={9} weight="bold" />
      </button>
      <AdBanner src={banner3} />
      <button className="absolute right-[40px] flex justify-center items-center bg-gray2 w-[40px] h-[40px] rounded rounded-[50px]">
        <ArrowIcon direction="right" width={9} weight="bold" />
      </button>
      <SearchObject width={136.67} height={108.27} />
    </div>
  );
};

export default AdSlider;
