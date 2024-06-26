const OrganInfoBox = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="subTitle1">내 기업 정보</div>
      <div className="border grid grid-cols-2 gap-[40px] p-[40px]">
        <div className="flex flex-col gap-[10px]">
          <label className="subTitle2 text-[#2D2D2D]">기업명</label>
          <div className="subTitle2 border rounded rounded-[10px] p-[15px]">
            성희네 사과 농장
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="subTitle2 text-[#2D2D2D]">사업 내용</label>
          <div className="subTitle2 border rounded rounded-[10px] p-[15px]">
            과수 재배(사과)
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="subTitle2 text-[#2D2D2D]">사업자등록번호</label>
          <div className="subTitle2 border rounded rounded-[10px] p-[15px]">
            12345
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganInfoBox;
