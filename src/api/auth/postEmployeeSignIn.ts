import setTokenLocalStorage from "@/lib/setTokenLocalStorage";

export default async function postEmployeeSignIn() {
  try {
    const response = await fetch("http://3.35.171.211/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "example@example.com",
        password: "password",
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const authHeader = response.headers.get("Authorization");

    if (authHeader) {
      setTokenLocalStorage(authHeader);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
