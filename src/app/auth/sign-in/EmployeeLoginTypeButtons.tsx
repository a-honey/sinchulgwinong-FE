import { googleClientId, googleRedirectUrl } from "@/constants/env";

import Button from "@/components/Button";
import Link from "next/link";

const EmployeeLoginTypeButtons = ({
  toggleIsEmailLoginFormOpen,
}: {
  toggleIsEmailLoginFormOpen: () => void;
}) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <Link
        href={`https://accounts.google.com/o/oauth2/v2/auth?
client_id=${googleClientId}
&redirect_uri=${googleRedirectUrl}
&response_type=code
&scope=email+profile`}
      >
        <Button
          className="bg-[#EEEEEE] py-[25px] w-[700px]"
          text="구글 계정으로 로그인"
          isRound
        />
      </Link>
      <Button
        className="bg-[#FFD600] py-[25px] w-[700px]"
        text="카카오 계정으로 로그인"
        isRound
      />
      <Button
        onClick={toggleIsEmailLoginFormOpen}
        className="bg-[#FFC56F] py-[25px] w-[700px]"
        text="이메일로 로그인"
        isRound
      />
    </div>
  );
};

export default EmployeeLoginTypeButtons;
