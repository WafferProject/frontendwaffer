import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Offer from './components/Offer'
import NavigationBar from './components/NavigationBar';

import Footer from './components/Footer';


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
