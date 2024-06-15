import { headers } from "next/headers";

export const getUrlSearch = () => {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";

  return fullUrl.split("/")[3];
};
