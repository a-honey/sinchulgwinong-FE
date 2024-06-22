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

  private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.headers,
        ...options.headers,
      },
    });

    const data = await response.json();
    return data as T;
  }

  public async get<T>(endpoint: string, headers?: HeadersInit): Promise<T> {
    return this.request<T>(endpoint, {
      method: "GET",
      headers,
    });
  }

  public async post<T>(endpoint: string, body: any, headers?: HeadersInit) {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });
  }

  public async patch<T>(endpoint: string, body: any, headers?: HeadersInit) {
    return this.request<T>(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers,
    });
  }

  public async delete<T>(endpoint: string, headers?: HeadersInit) {
    return this.request<T>(endpoint, {
      method: "DELETE",
      headers,
    });
  }
}

export default Api;
