import Api from ".";
import { baseURL } from "@/constants/env";

const apiInstance = Api.getInstance({
  baseURL: baseURL ?? "",
});

export default apiInstance;
