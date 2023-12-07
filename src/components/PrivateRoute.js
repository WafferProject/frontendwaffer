import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Unauthorized from "./Unauthorized";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
 
  return isAuthenticated ? children : <Unauthorized/>  ;
}
export default PrivateRoute;
