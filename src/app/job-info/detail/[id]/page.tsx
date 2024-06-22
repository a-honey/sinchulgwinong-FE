import ChatIcon from "@/assets/icons/ChatIcon";
import ContentBox from "./ContentBox";
import EmployerBox from "./EmployerBox";
import InfoBox from "./InfoBox";
import ScrapIcon from "@/assets/icons/ScrapIcon";

const Page = () => {
  return (
    <main className="mt-[72px] flex flex-col gap-[60px]">
      <InfoBox
        title="사과농장"
        date={"2024-06-22-2024-06-22"}
        region="강원도"
        salaryType="일급"
        salaryAmount={200000}
        sex={"여성"}
      />
      <ContentBox content={"사과 농장입니다."} />
      <EmployerBox employeeId={0} />
      <div className="flex justify-center gap-[20px]">
        <button className="w-[168px] flex gap-[30px] items-center p-[20px] border rounded rounded-[10px]">
          <ScrapIcon />
          스크랩
        </button>
        <button className="w-[168px] flex gap-[30px] items-center p-[20px] bg-[#FFDB80] rounded rounded-[10px]">
          <ChatIcon />
          채팅
        </button>
      </div>
    </main>
  );
};

export default Page;
