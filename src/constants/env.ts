export const KAKAO_MAP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

let googleRedirectUrl: string;

if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
  googleRedirectUrl = "http://localhost:3000/auth/google";
} else {
  googleRedirectUrl = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL || "";
}

export { googleRedirectUrl };
