interface InfoBoxProps {
  title: string;
  date: string;
  region: string;
  salaryType: string;
  salaryAmount: number;
  sex: string;
}
const InfoBox = ({
  date,
  sex,
  title,
  region,
  salaryType,
  salaryAmount,
}: InfoBoxProps) => {
  return (
    <section className="flex flex-col gap-[25px]">
      <h1 className="flex justify-center title1">{title}</h1>
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-center subTitle1">상세 정보</div>
        <article className="grid grid-cols-3">
          <div className="flex flex-col border border-[#B8B8B8]">
            <div className="flex justify-center subTitle1 py-[25px] bg-[#F4F4F4]">
              근무 조건
            </div>
            <div className="min-h-[300px] p-[20px]">
              <div>작업 기간 | {date}</div>
              <div>지역 | {region}</div>
              <div>
                급여 | {salaryType} {salaryAmount}
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-l-0 border-[#B8B8B8]">
            <div className="flex justify-center subTitle1 py-[25px] bg-[#F4F4F4]">
              모집내용
            </div>
            <div className="min-h-[300px] p-[20px]">
              <div>성별 |{sex}</div>
            </div>
          </div>
          <div className="flex flex-col border border-l-0  border-[#B8B8B8]">
            <div className="flex justify-center subTitle1 py-[25px] bg-[#F4F4F4]">
              기업 정보
            </div>
            <div className="min-h-[300px] p-[20px]"></div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default InfoBox;
