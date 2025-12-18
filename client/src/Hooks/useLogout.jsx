import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // removing user from local storage
    localStorage.removeItem("user");

    //update the context
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useLogout;
