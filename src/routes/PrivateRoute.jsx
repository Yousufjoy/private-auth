import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children; // user jodi thake tahole tumi jekhane jete chao sekhane jete dibo r jodi na thake tahole niche login page e pathay dibo
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
