import apiInstance from "../apiInstance";
import { baseURL } from "@/constants/env";
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
    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const authHeader = response.headers.get("Authorization");

    if (authHeader) {
      setTokenLocalStorage(authHeader);
      apiInstance.setAuthorizationToken(authHeader);
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
