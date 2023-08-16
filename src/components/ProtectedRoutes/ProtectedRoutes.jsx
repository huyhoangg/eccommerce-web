import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "~/contexts/AuthContext";

export default function ProtectedRoutes() {
  const authContext = useContext(AuthContext);
  let { userInfo } = authContext;
  return userInfo ? <Outlet /> : <Navigate to="/store" />;
}
