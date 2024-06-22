import { useRouter } from "next/navigation";

const useLogout = () => {
  const router = useRouter();
  if (typeof window === "undefined") return;
  localStorage.removeItem("accessToken");
  router.push("/");
  return;
};

export default useLogout;
