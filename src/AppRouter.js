// AppRouter.js
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SplitScreen from './components/SplitScreen';
import ParentHome from './ParentHome';
import SignInUpConsumer from './components/signupconsumer_business';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentHome/>} />
        <Route path="/split-screen" element={<SplitScreen/>}/>
        <Route path="/SignUp" element={<SignInUpConsumer/>}/>

      </Routes>
    </Router>
  );
};

export default AppRouter;
