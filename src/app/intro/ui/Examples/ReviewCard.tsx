const ReviewCard = () => {
  return (
    <div className="flex flex-col justify-between py-[40px] px-[20px] items-end border-t-[11px] border-primary4 border-l-[1px] border-r-[1px] border-b-[1px] bg-white h-full">
      <div className="w-full flex flex-col gap-[20px]">
        <div className="title1">아현 옥수수 농장</div>
        <div>[충남 천안시]</div>
      </div>
      <div className="text-[24px]">★★★★★</div>
    </div>
  );
};

export default ReviewCard;
