import Container from "./Container";

const ReviewBox = () => {
  return (
    <Container
      beforeTitle="현재 쌓은 포인트로"
      pointTitle="리뷰 3개"
      afterTitle="를 볼 수 있어요!"
    >
      <div className="flex">
        <div>
          <div>쌓인 포인트</div>
          <div>200 P</div>
        </div>
        <div>
          <div>볼 수 있는 리뷰 갯수</div>
          <div>200 P</div>
        </div>
        <div>
          <div>다음 리뷰까지</div>
          <div>200 P</div>
        </div>
        <div>리뷰 지금 보러 가기</div>
      </div>
    </Container>
  );
};

export default ReviewBox;
