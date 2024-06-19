import Button from "@/components/Button";
import { Input } from "@/components/ui/input";

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
        <Input type="checkbox" />
        <label>서비스 이용 약관 동의</label>
        <div>자세히 보기</div>
      </div>
      <div>
        <Input type="checkbox" />
        <label>개인정보 수집 및 이용 동의</label>
        <div>자세히 보기</div>
      </div>
      <div>
        <Input type="checkbox" />
        <label>위치기반서비스 이용 동의</label>
        <div>자세히 보기</div>
      </div>
      <Button varients="yellow" text="회원가입" />
    </form>
  );
};

export default EmployerRegisterForm;
