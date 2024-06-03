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
      <div>
        <ReviewCard />
        <ReviewCard />
      </div>
    </Container>
  );
};

export default ReviewBox;
