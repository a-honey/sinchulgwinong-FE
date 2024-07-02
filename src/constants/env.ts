export const KAKAO_MAP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const domain = (() => {
  const url = new URL(process.env.NEXT_PUBLIC_BASE_URL!);
  return url.hostname;
})();

export const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

let googleRedirectUrl: string;

if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
  googleRedirectUrl = "http://localhost:3000/auth/google";
} else {
  googleRedirectUrl = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL || "";
}

export { googleRedirectUrl };

export const googleOAuthUrl =
  "`https://accounts.google.com/o/oauth2/auth?client_id=391052902653-gbd757i3kc7lld5oa6ir8gf023mp2dn6.apps.googleusercontent.com&redirect_uri=https://cat.sinchulgwinong.site/social-login/callback&response_type=code&scope=email%20profile`";
