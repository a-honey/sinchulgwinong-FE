import Container from "./Container";
import ReviewCard from "./ReviewCard";

const ReviewBox = () => {
  return (
    <Container
      beforeTitle="주변"
      pointTitle="최신 리뷰"
      afterTitle="를 확인하세요!"
      description="리뷰 확인하고 일 시작하세요"
    >
      <div className="grid grid-cols-2 w-full gap-[25px]">
        <ReviewCard />
        <ReviewCard />
      </div>
    </Container>
  );
};

export default ReviewBox;
