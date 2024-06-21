import AdSlider from "./intro/ui/Banner/AdSlider";
import BannerBox from "./intro/ui/Banner/BannerBox";
import ChatObject from "@/assets/icons/ChatObject";
import JobBox from "./intro/ui/Examples/JobBox";
import ReviewBox from "./intro/ui/Examples/ReviewBox";

export default function Home() {
  return (
    <main className="flex flex-col gap-[120px]">
      <div className="flex flex-col mt-[130px] gap-[50px]">
        <AdSlider />
        <BannerBox />
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
