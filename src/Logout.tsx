import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { LoginActions } from "./store/LoginSlice";
export default () => {
  const { reset } = LoginActions;
  const dispatch = useDispatch();
  const logout = () => {
    try {
      dispatch(reset());
      localStorage.removeItem("authToken");
      googleLogout();
      console.log("Logged out and token revoked");
    } catch (error) {
      console.log("Error occured bro", error);
    }
  };
  return (
    <button
      className="flex border border-blue-500 justify-center content-center rounded-md p-4 w-full"
      onClick={logout}
    >
      Logout
    </button>
  );
};
