import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import InputPolicyAgree from "../ui/InputPolicyAgree";

const EmployeeEmailRegisterForm = () => {
  return (
    <form>
      <Input placeholder="이메일 입력" />
      <Input placeholder="이메일 인증번호 입력" />
      <Input placeholder="비밀번호 입력" />
      <Input placeholder="이름 입력" />
      <Input placeholder="닉네임 입력" />
      <Input placeholder="전화번호 입력" />
      <div>
        <InputPolicyAgree label="서비스 이용 약관 동의" />
        <InputPolicyAgree label="개인정보 수집 및 이용 동의" />
        <InputPolicyAgree label="위치기반 서비스 이용 동의" />
      </div>
      <Button varients="yellow" text="회원가입" />
    </form>
  );
};

export default EmployeeEmailRegisterForm;
