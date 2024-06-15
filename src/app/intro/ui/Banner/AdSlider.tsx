import AdSlide from "./AdSlide";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import SearchObject from "@/assets/icons/SearchObject";

const AdSlider = () => {
  return (
    <div className="flex w-full h-[200px] py-[40px] px-[120px] justify-between items-center bg-gray1 relative">
      <button className="absolute left-[40px] flex justify-center items-center bg-gray2 w-[40px] h-[40px] rounded rounded-[50px]">
        <ArrowIcon direction="left" width={9} weight="bold" />
      </button>
      <AdSlide />
      <button className="absolute right-[40px] flex justify-center items-center bg-gray2 w-[40px] h-[40px] rounded rounded-[50px]">
        <ArrowIcon direction="right" width={9} weight="bold" />
      </button>
      <SearchObject width={136.67} height={108.27} />
    </div>
  );
};

export default AdSlider;
