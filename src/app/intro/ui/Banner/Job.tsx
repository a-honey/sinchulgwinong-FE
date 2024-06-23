import Container from "./Container";

const Job = () => {
  return (
    <Container
      textElement={
        <h3 className="text-[32px]">
          “원하는{" "}
          <span className="text-[32px] font-semibold text-[#7C3B00]">
            농촌 일자리
          </span>
          를 찾아봐요!“
        </h3>
      }
    >
      <div>
        <div>
          <div className="flex">
            <label>원하는 지역은?</label>
            <div>선택</div>
          </div>
        </div>
        <button>검색</button>
      </div>
    </Container>
  );
};

export default Job;
