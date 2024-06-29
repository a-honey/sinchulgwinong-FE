import { useEffect, useState } from "react";

import { checkIsLogin } from "@/lib/authUtils";

const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleIsLogin = (bool: boolean) => {
    setIsLogin(bool);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const loginStatus = await checkIsLogin();
      setIsLogin(loginStatus);
    };
    checkLogin();
  }, [setIsLogin]);

  return { isLogin, handleIsLogin };
};

export default useIsLogin;
