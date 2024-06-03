import Container from "./Container";

const Review = () => {
  return (
    <Container
      beforeTitle="원하는"
      pointTitle="농촌 일자리"
      afterTitle="를 찾아봐요!"
    >
      <div>
        <div>
          <div>
            <label>원하는 지역은?</label>
            <div>선택</div>
          </div>
        </div>
        <button>검색</button>
      </div>
    </Container>
  );
};

export default Review;
