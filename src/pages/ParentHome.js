import "./ParentHome.css";
import Home from "../components/Other/Home";
import Partners from "../components/Other/Partners";
import Work from "../components/Other/Work";
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