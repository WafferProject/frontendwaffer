import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SplitScreen from './components/SplitScreen';
import ParentHome from './pages/ParentHome';
import SignUpConsumerBuisness from './components/SignUpConsumerBuisness';
import SignInConsumerBuisness from './components/SignInConsumerBuisness';
import ContactPage from './pages/ContactPage';
import ConsumerDashboard from './pages/ConsumerDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import HomeAdmin from './pages/HomeAdmin';
import BusinessList from './pages/BusinessList'
import ConsumerList from './pages/ConsumerList'
import OrdersList from './pages/OrdersList';
import ProfileSettings from './pages/ProfileSettings'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ParentHome />} />
      <Route path="/split-screen" element={<SplitScreen />} />
      <Route path="/SignUp" element={<SignUpConsumerBuisness />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/consumer" element={<ConsumerDashboard/>}/>
      <Route path="/business" element={<BusinessDashboard/>}/>
      <Route path="/Signin" element={<SignInConsumerBuisness />} />
    
      <Route path="/admin" element={<HomeAdmin />} />
      <Route path="/BusinessList" element={<BusinessList />} />
      <Route path="/ConsumerList" element={<ConsumerList />} />
      <Route path="/OrdersList" element={<OrdersList />} />
      <Route path="/settings" element={<ProfileSettings />} />
      


    </Routes>
  </BrowserRouter>
  );
}
