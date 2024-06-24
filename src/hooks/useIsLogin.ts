import { useEffect, useState } from "react";

const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleIsLogin = (bool: boolean) => {
    setIsLogin(bool);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage) {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        setIsLogin(true);
      }
      if (!accessToken) {
        setIsLogin(false);
      }
    }
  }, [setIsLogin]);

  return { isLogin, handleIsLogin };
};

export default useIsLogin;
