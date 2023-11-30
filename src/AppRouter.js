// AppRouter.js
import React from 'react';
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SplitScreen from './components/SplitScreen';
import ParentHome from './ParentHome';
import SignInUpConsumer from './components/signupconsumer_business';
import ContactPage from './pages/ContactPage';
import ConsumerDashboard from './pages/ConsumerDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import Partners from './components/Partners';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParentHome />} />
        <Route path="/split-screen" element={<SplitScreen />} />
        <Route path="/SignUp" element={<SignInUpConsumer />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/consumer" element={<ConsumerDashboard/>}/>
        <Route path="/business" element={<BusinessDashboard/>}/>

      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter/>);
