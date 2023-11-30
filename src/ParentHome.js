import "./ParentHome.css";
import Home from "./components/Home";
import Partners from "./components/Partners";
import Work from "./components/Work";
function ParentHome() {
  return (
    <div className="ParentHome">
      <Home/>
      <Work/>
      <Partners/>
    </div>
    
  );
}

export default ParentHome;
