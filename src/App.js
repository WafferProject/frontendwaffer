import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SplitScreen from './components/SplitScreen';
import ParentHome from './pages/ParentHome';
import SignUpConsumerBuisness from './components/SignUpConsumerBuisness';
import SignInConsumerBuisness from './components/SignInConsumerBuisness';

import ContactPage from './pages/ContactPage';
import ConsumerDashboard from './pages/ConsumerDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import Partners from './components/Partners';

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


    </Routes>
  </BrowserRouter>
  );
}
