import Container from "./Container";
import JobCard from "./JobCard";

const JobBox = () => {
  return (
    <Container
      beforeTitle="주변"
      pointTitle="농촌 일자리"
      afterTitle="를 소개할게요!"
      description="농촌 알바하고 돈도 벌고 힐링도 해보아요."
    >
      <div className="grid grid-cols-4 w-full gap-[25px]">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </Container>
  );
};

export default JobBox;
