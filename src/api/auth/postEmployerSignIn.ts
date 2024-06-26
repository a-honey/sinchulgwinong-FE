import apiInstance from "../apiInstance";
import { baseURL } from "@/constants/env";
import setTokenLocalStorage from "@/lib/setTokenLocalStorage";

export interface EmployerSignInBody {
  cpEmail: string;
  cpPassword: string;
}

interface postEmployerSignInProps {
  body: EmployerSignInBody;
  onSuccess?: () => void;
  onError?: (string?: any) => void;
}

export default async function postEmployerSignIn({
  body,
  onError,
  onSuccess,
}: postEmployerSignInProps) {
  try {
    const response = await fetch(`${baseURL}/auth/cp-login`, {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
    });

    if (!response.ok) {
      const res = await response.json();
      onError?.(res?.message);
    }

    onSuccess?.();
  } catch (error) {
    onError?.(error);
  }
}
