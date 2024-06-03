import Image from "next/image";
import bgImage from "@/assets/images/rice_farming.png";

const AdSlide = () => {
  return (
    <div className="relative w-[660px] h-[600px]">
      <Image
        className="absolute"
        src={bgImage}
        alt="이천시 벼농사 일자리"
        width={660}
        height={600}
      />
      <div className="absolute text-white left-[30px] bottom-[30px]">
        <div>이천시 벼농사 일자리</div>
        <div>
          <div>경기도 이천시 사은로 126번길 46</div>
          <div>+) 031-282-7894</div>
        </div>
      </div>
    </div>
  );
};

export default AdSlide;
