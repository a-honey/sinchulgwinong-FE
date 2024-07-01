// TODO: POST 요청으로 변경 - 복잡한 로직삭제의 경우 RESTful하게 POST요청(바디값 전송)

import { baseURL } from "@/constants/env";

export default async function deleteAccount({
  type,
  password,
  onError,
  onSuccess,
}: {
  type: "employee" | "employer";
  password: string;
  onError?: (e: any) => void;
  onSuccess?: () => void;
}) {
  try {
    const response = await fetch(
      `${baseURL}${type === "employee" ? "/users" : "/cpUsers"}`,
      {
        method: "DELETE",
        body: JSON.stringify({ password }),
        credentials: "include",
      }
    );

    if (!response.ok) {
      const res = await response.json();
      onError?.(res?.message);
    }

    onSuccess?.();
  } catch (error) {
    onError?.(error);
  }
}
