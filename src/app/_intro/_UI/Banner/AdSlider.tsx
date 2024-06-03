import AdSlide from "./AdSlide";

const AdSlider = () => {
  return (
    <div>
      <div>
        <AdSlide />
      </div>
      <div className="flex">
        <div>nav</div>
        <button className="bg-[#E88900] text-white px-[50px] py-[40px]">
          이전
        </button>
        <button className="bg-[#FFB600] text-white px-[50px] py-[40px]">
          다음
        </button>
      </div>
    </div>
  );
};

export default AdSlider;
