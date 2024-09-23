import { googleLogout } from "@react-oauth/google";
export default () => {
  const logout = () => {
    try {
      googleLogout();
      console.log("Logged out successfully.");
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
