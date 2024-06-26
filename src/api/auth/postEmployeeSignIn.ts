import { baseURL } from "@/constants/env";

export interface EmployeeSignInBody {
  email: string;
  password: string;
}

interface postEmployeeSignInProps {
  body: EmployeeSignInBody;
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
