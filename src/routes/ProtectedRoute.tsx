import { selectCurrentUser, useToken } from "@/redux/features/auth/authSLice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type TProtectedProps = {
  children: ReactNode;
};
const publicRoutes = ["/", "/product", "/shop" ,"/auth/login" ,"/auth/register"];

function isProtectedRoute(path: string) {
  if (publicRoutes.includes(path)) {
    return false;
  }
  // Check for /product/:id pattern
  if (path.startsWith("/product/")) {
    return false;
  }

  return true;
}

export default function ProtectedRoute({ children }: TProtectedProps) {
  const location = useLocation();
  const token = useAppSelector((state) => useToken(state));
  const user = useAppSelector((state) => selectCurrentUser(state));

  if (isProtectedRoute(location.pathname) && (!token || !user)) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
}
