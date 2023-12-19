import { useAuth } from "./AuthContext";
import Unauthorized from "./Unauthorized";

function PrivateRoute({ children, allowedRole }) {
  const { isAuthenticated, isBuisness } = useAuth();

  if (isAuthenticated) {
    if (
      (allowedRole === "Buisness" && isBuisness) ||
      (allowedRole === "Consumer" && !isBuisness)
    ) {
      return children;
    }
    // No Role auth
    return <Unauthorized />;
  } else {
    // Render Unauthorized component if not authenticated
    return <Unauthorized />;
  }
}
export default PrivateRoute;
