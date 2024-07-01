import AdSlider from "./intro/ui/Banner/AdSlider";
import BannerBox from "./intro/ui/Banner/BannerBox";
import JobBox from "./intro/ui/Examples/JobBox";
import ReviewBox from "./intro/ui/Examples/ReviewBox";

export default function Home() {
  return (
    <main className="flex flex-col gap-[50px]">
      <div className="flex flex-col mt-[72px] gap-[40px]">
        <AdSlider />
        <BannerBox />
      </div>
      <div className="relative bg-primary1">
        <JobBox />
        <ReviewBox />
      </div>
    </main>
  );
}
