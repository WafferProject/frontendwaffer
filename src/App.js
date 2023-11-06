import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Offer from './Components/Offer'
import NavigationBar from './Components/NavigationBar';

import Footer from './Components/Footer';


function App() {
  
  return (
    <BrowserRouter>
    
   

    <NavigationBar/>
    <Offer/>
    <Footer/>

    
    
    </BrowserRouter>
  )
}

export default App;
