export default function setTokenLocalStorage(token: string) {
  try {
    console.log("Saving token:", token);
    localStorage.setItem("accessToken", token);
    console.log("Token saved to localStorage");
  } catch (error) {
    console.error("Error saving token to localStorage:", error);
  }
}
