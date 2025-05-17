import { useStore } from "../../state/store";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const { auth, isAuthenticated } = useStore();

  if (!auth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
