import EditInfo from "../user/EditInfo";
import ReviewBox from "./ReviewBox";

const MyOrgan = () => {
  return (
    <>
      <h2 className="title1 mb-[50px]">내 기업 정보</h2>
      <EditInfo isDetail />
      <ReviewBox />
    </>
  );
};

export default MyOrgan;
