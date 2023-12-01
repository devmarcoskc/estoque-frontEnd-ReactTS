import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const authCtx = useContext(AuthContext);

  if(!authCtx) {
    throw new Error("Você deve se autenticar");
  }

  const token = authCtx.auth.token as string;
  const user = authCtx.auth.user;
  const orgaoId = authCtx.auth.user?._id as string;
  const login = authCtx.login;
  const logout = authCtx.logout;

  return {
    token, user, login, logout, orgaoId
  }
}