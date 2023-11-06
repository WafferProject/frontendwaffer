import { Link } from 'react-router-dom';
import "./NavigationBar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Switch from './SwitchButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import wafferLogo from '../images/LogoWaffer.png';
function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="container">
        <Navbar.Brand>
        <img src={wafferLogo} alt="Waffer Logo" width="90px" height="90px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="offcanvasNavbar" className="justify-content-end">
        <Nav className="me-auto navbar-nav">
          <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
          <Switch className="nav-item" />
        </Nav>

          <Button className="btn" variant="outline-success">Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
