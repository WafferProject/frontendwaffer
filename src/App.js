import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import FormOffer from "./components/FormOffer";

import React, { useState } from 'react';
import ProfileSettings from "./pages/ProfileSettings";


function App() {
 
  return (
    <BrowserRouter>
     
      <Routes>
      
        <Route path="/form" element={<FormOffer />} />
      </Routes>
   
     <ProfileSettings/>
   
    </BrowserRouter>
  );
}

export default App;
