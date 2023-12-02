import "./ParentHome.css";
import Home from "../components/Home";
import Partners from "../components/Partners";
import Work from "../components/Work";
import Footer from "../components/Footer";
function ParentHome() {
  return (
    <div className="ParentHome">
      <Home/>
      <Work/>
      <Partners/>
      <Footer/>
    </div>

  );
}
export default ParentHome;