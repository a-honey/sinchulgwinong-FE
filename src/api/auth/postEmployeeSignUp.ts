export default function postEmployeeSignUp() {
  fetch("http://3.35.171.211/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "김은채",
      nickname: "대구총잡이",
      password: "password",
      confirmPassword: "password",
      email: "example@example.com",
      phoneNumber: "01012345678",
      loginType: "EMAIL",
      agreeToTerms: true,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return;
}
