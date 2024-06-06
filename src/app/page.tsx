import AdSlider from "./_intro/_UI/Banner/AdSlider";
import Job from "./_intro/_UI/Banner/Job";
import JobBox from "./_intro/_UI/Examples/JobBox";
import Review from "./_intro/_UI/Banner/Review";
import ReviewBox from "./_intro/_UI/Examples/ReviewBox";

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
