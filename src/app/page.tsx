import AdSlider from "./intro/ui/Banner/AdSlider";
import ChatObject from "@/assets/icons/ChatObject";
import Job from "./intro/ui/Banner/Job";
import JobBox from "./intro/ui/Examples/JobBox";
import Review from "./intro/ui/Banner/Review";
import ReviewBox from "./intro/ui/Examples/ReviewBox";

export default function Home() {
  return (
    <main className="flex flex-col gap-[120px]">
      <div className="flex flex-col mt-[130px] gap-[50px]">
        <AdSlider />
        <div className="flex justify-between gap-[55px]">
          <Review />
          <Job />
        </div>
      </div>
      <div className="relative bg-primary1">
        <div className="absolute right-[100px] top-[-50px]">
          <ChatObject width={97.5} height={96.85} />
        </div>
        <JobBox />
        <ReviewBox />
      </div>
    </main>
  );
}
