import apiInstance from "../apiInstance";
import setTokenLocalStorage from "@/lib/setTokenLocalStorage";

interface SignInBody {
  email: string;
  password: string;
}

interface postEmployeeSignInProps {
  body: SignInBody;
  onSuccess?: () => void;
  onError?: (string?: any) => void;
}

export default async function postEmployeeSignIn({
  body,
  onError,
  onSuccess,
}: postEmployeeSignInProps) {
  try {
    const response = await apiInstance.post("/auth/login", body);

    const authHeader = response.headers.get("Authorization");

    if (authHeader) {
      setTokenLocalStorage(authHeader);
    }

    if (!response.ok) {
      const res = await response.json();
      onError?.(res?.message);
    }

    onSuccess?.();
  } catch (error) {
    onError?.(error);
  }
}
