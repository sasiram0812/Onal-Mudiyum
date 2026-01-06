import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useAuth();

  if (authLoading) {
    return <Loader />; // 🔥 WAIT FOR AUTH
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
