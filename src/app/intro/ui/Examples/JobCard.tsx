import Link from "next/link";

const JobCard = () => {
  return (
    <Link href={`/organ/5`}>
      <div className="flex flex-col justify-between p-[20px] items-end border-t-[11px] border-t-primary3 border-l-[1px] border-l-primary4 border-r-[1px] border-r-primary4 border-b-[1px] border-b-primary4 bg-white h-full">
        <div className="relative w-full">
          <div className="absolute right-[20px]">D - 9</div>
          <div className="title2">아현 옥수수 농장</div>
          <div className="title1">옥수수 농장 인력 구합니다.</div>
          <div className="title1">[충남 천안시]</div>
        </div>
        <div>
          월급 <span className="title2 text-primary4">100,000원</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
