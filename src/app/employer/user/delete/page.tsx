"use client";

import Button from "@/components/Button";

const Posts = () => {
  return (
    <>
      <h2 className="title1 mb-[50px]">회원 탈퇴하기</h2>
      <form className="flex flex-col gap-[20px]">
        <div className="detail">
          계정을 삭제하기 위해 현재 비밀번호를 입력해주세요.
        </div>
        <input className="border" />
        <div className="detail">
          계정 삭제 시, 회원 정보와 모든 이용 내역 (스크랩 및 작성 목록) 이
          삭제되며 복구가 불가능합니다.
          <br />
          정말 탈퇴하시겠어요?
        </div>
        <div>
          <input type="checkbox" />
          <label>확인했습니다.</label>
        </div>
        <Button
          text="회원 탈퇴하기"
          className="bg-[#FFE6A6] py-[20px] subTitle1"
          onClick={() => {
            console.log("ㄱ");
          }}
        />
      </form>
    </>
  );
};

export default Posts;
