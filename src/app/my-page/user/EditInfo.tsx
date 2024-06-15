import EditItem from "./EditItem";

const EditInfo = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="subTitle1">회원 정보 수정</div>
      <div className="border-[2px] border-[#E9E9E9] px-[60px] py-[52px] grid grid-cols-2 gap-[30px]">
        <EditItem label="닉네임" value={"야호야호"} />
        <EditItem label="이름" value={"박주은"} />
        <EditItem label="이메일" value={"9502team@gmail.com"} />
        <EditItem label="전화번호" value={"010-2257-5477"} />
        <EditItem label="비밀번호" />
      </div>
    </div>
  );
};

export default EditInfo;
