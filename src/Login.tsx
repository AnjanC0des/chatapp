import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { LoginActions } from "./store/LoginSlice";
import {jwtDecode} from "jwt-decode";
export default () => {
  const { setLogin } = LoginActions;
  const dispatch = useDispatch();

  const handleLoginSuccess = (response) => {
    console.log(response);
    const data=jwtDecode(response.credential);
    console.log(data);
    const user = {
      email: data.email,
      name: data.name,
      token: response.credential,
    };
    dispatch(setLogin(user));
    localStorage.setItem("authToken", user.token);
    console.log("Login Success:", user);
    // Handle login success (e.g., store tokens, redirect user)
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failed:", error);
    // Handle login failure
  };
  return (
    <button className="flex border border-blue-500 justify-center content-center rounded-md p-4 w-full">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </button>
  );
};
