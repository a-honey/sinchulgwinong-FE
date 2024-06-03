import AdSlider from "./_intro/_UI/Banner/AdSlider";
import Job from "./_intro/_UI/Banner/Job";
import JobBox from "./_intro/_UI/Examples/JobBox";
import Review from "./_intro/_UI/Banner/Review";
import ReviewBox from "./_intro/_UI/Examples/ReviewBox";

export default function Home() {
  return (
    <main>
      <div className="flex p-[65px]">
        <AdSlider />
        <div className="flex flex-col">
          <Review />
          <Job />
        </div>
      </div>
      <div className="bg-[#FFFAEE]">
        <JobBox />
        <ReviewBox />
      </div>
    </main>
  );
}
