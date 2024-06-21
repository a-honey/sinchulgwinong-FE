import Button from "@/components/Button";

// TODO: type과 interface 차이
export type UserAuthType = "employee" | "employer";

interface UserTypeSelectBoxProps {
  mode: UserAuthType;
  changeMode: (mode: UserAuthType) => void;
}

const UserTypeSelectBox = ({ mode, changeMode }: UserTypeSelectBoxProps) => {
  return (
    <div>
      <Button
        className={
          mode === "employee"
            ? "bg-primary3 px-[30px] py-[17px]"
            : "px-[30px] py-[17px]"
        }
        text="구직자"
        onClick={() => {
          changeMode("employee");
        }}
      />
      <Button
        className={
          mode === "employer"
            ? "bg-primary3 px-[30px] py-[17px]"
            : "px-[30px] py-[17px]"
        }
        text="구직자"
        onClick={() => {
          changeMode("employer");
        }}
      />
    </div>
  );
};

export default UserTypeSelectBox;
