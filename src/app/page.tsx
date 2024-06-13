import AdSlider from "./intro/ui/Banner/AdSlider";
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
      <div className="bg-primary1">
        <JobBox />
        <ReviewBox />
      </div>
    </main>
  );
}
