"use client";

import Button from "@/components/Button";

const onClick = () => {
  alert("준비중입니다.");
};

const EmployeeRegisterTypeButtons = ({
  toggleIsEmailRegisterFormOpen,
}: {
  toggleIsEmailRegisterFormOpen: () => void;
}) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <Button
        onClick={onClick}
        className="bg-[#EEEEEE] py-[25px] w-[700px]"
        text="구글 계정으로 회원가입"
        isRound
      />
      <Button
        onClick={onClick}
        className="bg-[#FFD600] py-[25px] w-[700px]"
        text="카카오 계정으로 회원가입"
        isRound
      />
      <Button
        onClick={toggleIsEmailRegisterFormOpen}
        className="bg-[#FFC56F] py-[25px] w-[700px]"
        text="이메일로 회원가입"
        isRound
      />
    </div>
  );
};
export default EmployeeRegisterTypeButtons;
