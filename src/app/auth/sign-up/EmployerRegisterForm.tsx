import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import InputPolicyAgree from "../ui/InputPolicyAgree";

const EmployerRegisterForm = () => {
  return (
    <form className="flex flex-col gap-[25px]">
      <Input placeholder="이메일 입력" />
      <Input placeholder="이메일 인증번호 입력" />
      <Input placeholder="비밀번호 입력" />
      <Input placeholder="이름 입력" />
      <Input placeholder="닉네임 입력" />
      <Input placeholder="전화번호 입력" />
      <div>
        <InputPolicyAgree label="현재 활동 중이신가요?" />
      </div>
      <Button
        varients="yellow"
        text="회원가입"
        className="px-[30px] py-[17px]"
        isRound
      />
    </form>
  );
};

export default EmployerRegisterForm;
