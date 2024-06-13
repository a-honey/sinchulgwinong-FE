import Link from "next/link";

const JobCard = () => {
  return (
    <Link href={`/organ/5`}>
      <div className="bg-white h-full">
        <div>아현 옥수수 농장</div>
        <div>옥수수 농장 인력 구합니다.</div>
        <div>[충남 천안시]</div>
        <div>
          <div>월급 100,000원</div>
          <div>D - 9</div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
