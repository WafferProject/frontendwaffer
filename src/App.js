import { Routes, Route, BrowserRouter } from "react-router-dom";
import SplitScreen from "./pages/SplitScreen";
import ParentHome from "./pages/ParentHome";
import SignUpConsumerBuisness from "./components/Other/SignUpConsumerBuisness";
import SignInConsumerBuisness from "./components/Other/SignInConsumerBuisness";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContextProvider } from "./components/AuthContext";
import ProfileSettings from "./pages/ProfileSettings";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import ConsumerDashboard from "./pages/ConsumerDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";
import HomeAdmin from "./pages/HomeAdmin";
import BusinessList from "./pages/BusinessList";
import ConsumerList from "./pages/ConsumerList";
import OrdersList from "./pages/OrdersList";
import UserDetails from "./components/Admin/UserDetails";

import Footer from "./components/Other/Footer";
import AddBusiness from './components/Admin/AddBusiness'
import About from "./components/Other/About";

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ParentHome />} />
          <Route path="/split-screen" element={<SplitScreen />} />
          <Route path="/signup" element={<SignUpConsumerBuisness />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/signin" element={<SignInConsumerBuisness />} />
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/BusinessList" element={<BusinessList />} />
          <Route path="/ConsumerList" element={<ConsumerList />} />
          <Route path="/ConsumerList/:id" element={<UserDetails userType="consumer" />} />
          <Route path="/BusinessList/:id" element={<UserDetails userType="business" />} />
          <Route path="/OrdersList" element={<OrdersList />} />
          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="/new" element={<AddBusiness />} />
          <Route path="/about" element={<About />} />

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
          />
        </Routes>
      </AuthContextProvider>
      <Footer/>

    </BrowserRouter>
  );
}
