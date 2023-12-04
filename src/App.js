import { Routes, Route, BrowserRouter } from "react-router-dom";
import SplitScreen from "./components/SplitScreen";
import ParentHome from "./pages/ParentHome";
import SignUpConsumerBuisness from "./components/SignUpConsumerBuisness";
import SignInConsumerBuisness from "./components/SignInConsumerBuisness";

import ContactPage from "./pages/ContactPage";
import ConsumerDashboard from "./pages/ConsumerDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";
import Partners from "./components/Partners";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContextProvider } from "./components/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<ParentHome />} />
          <Route path="/split-screen" element={<SplitScreen />} />
          <Route path="/SignUp" element={<SignUpConsumerBuisness />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/consumer"
            element={
              <PrivateRoute>
                <ConsumerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/buisness"
            element={
              <PrivateRoute>
                <BusinessDashboard />
              </PrivateRoute>
            }
          />{" "}
          <Route path="/Signin" element={<SignInConsumerBuisness />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
