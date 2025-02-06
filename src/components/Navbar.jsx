import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";
import "./components.css";

function NavigationBar() {
  return (
    <div>
      <Container>
        <Navbar expand="lg" className="navbar" >
          <Container>
            <Navbar.Brand href="/"><b>Nav</b>Bar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-collapse-icon "/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="/test">Link</Nav.Link> */}
                <NavDropdown title="Sections" id="basic-nav-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="about" spy={true} smooth={true} offset={-70} duration={500} className="custom-dropdown-item">
                  About
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="skills" spy={true} smooth={true} offset={-70} duration={500} className="custom-dropdown-item">
                  Skills
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="projects" spy={true} smooth={true} offset={-70} duration={500} className="custom-dropdown-item">
                  Projects
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="contact" spy={true} smooth={true} offset={-70} duration={500} className="custom-dropdown-item">
                  Contact
                </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavigationBar;
