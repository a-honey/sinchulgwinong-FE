import AdSlide from "./AdSlide";
import SearchObject from "@/assets/icons/SearchObject";

const AdSlider = () => {
  return (
    <div className="flex w-full h-[200px] justify-between bg-gray1 relative">
      <button className="bg-gray2">이전</button>
      <AdSlide />
      <button className="bg-gray2">다음</button>
      <SearchObject
        className="absolute right-[250px] bottom-[30px]"
        width={164}
        height={130.79}
      />
    </div>
  );
};

export default AdSlider;
