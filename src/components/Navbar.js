import { Link } from 'react-router-dom';
import "./NavigationBar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Switch from './SwitchButton';
import Nav from 'react-bootstrap/Nav';
import Navbarr from 'react-bootstrap/Navbar';
import wafferLogo from '../images/LogoWaffer.png';
function Navbar() {
  return (
    <Navbarr expand="lg" className="navbar">
      <Container fluid className="container">
        <Navbarr.Brand>
        <img src={wafferLogo} alt="Waffer Logo" width="90px" height="90px"/>
        </Navbarr.Brand>
        <Navbarr.Toggle aria-controls="offcanvasNavbar" />
        <Navbarr.Collapse id="offcanvasNavbar" className="justify-content-end">
        <Nav className="me-auto navbar-nav">
          <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
          <Switch className="nav-item" />
        </Nav>

          <Button className="btn" variant="outline-success">Sign In</Button>
        </Navbarr.Collapse>
      </Container>
    </Navbarr>
  );
}

export default Navbar;
