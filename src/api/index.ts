import { baseURL } from "@/constants/env";

interface ApiConfig {
  baseURL: string;
  headers?: HeadersInit;
}

class Api {
  private static instance: Api;
  private baseURL: string;
  private headers: HeadersInit;

  constructor(config: ApiConfig) {
    this.baseURL = config.baseURL || baseURL!;
    this.headers = config.headers || {
      "Content-Type": "application/json",
      Authorization: "",
    };
  }

  public static getInstance(config: ApiConfig): Api {
    if (!Api.instance) {
      Api.instance = new Api(config);
    }
    return Api.instance;
  }

  private async request(endpoint: string, options: RequestInit) {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    });

    return response;
  }

  public async get(endpoint: string, headers?: HeadersInit) {
    return this.request(endpoint, {
      method: "GET",
      headers,
    });
  }

  public async post(endpoint: string, body: any, headers?: HeadersInit) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });
  }

  public async put(endpoint: string, body: any, headers?: HeadersInit) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      headers,
    });
  }

  public async delete(endpoint: string, headers?: HeadersInit) {
    return this.request(endpoint, {
      method: "DELETE",
      headers,
    });
  }
}

export default Api;
