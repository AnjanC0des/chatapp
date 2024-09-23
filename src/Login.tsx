import { GoogleLogin } from "@react-oauth/google";
export default () => {
  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    // Handle login success (e.g., store tokens, redirect user)
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
    // Handle login failure
  };
  return (
    <button className="flex border border-blue-500 justify-center content-center rounded-md p-4 w-full">
      <img src="src/assets/googlelogo.svg" width="25" height="25" />
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </button>
  );
};
