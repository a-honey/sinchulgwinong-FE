import { Input } from "@/components/ui/input";

interface InputPolicyAgreeProps {
  label: string;
}

const InputPolicyAgree = ({ label }: InputPolicyAgreeProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <Input type="checkbox" className="w-[14px]" />
      <label>{label}</label>
      <div className="detail2">자세히 보기</div>
    </div>
  );
};
export default InputPolicyAgree;
