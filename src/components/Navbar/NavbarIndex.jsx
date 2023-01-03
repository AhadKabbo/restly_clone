import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarIndex = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Restly</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Home 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Home 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Home 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/about">About1</NavDropdown.Item>
                <NavDropdown.Item href="/about">About 2</NavDropdown.Item>
                <NavDropdown.Item href="/about">About 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="Service">Services 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Services 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Services 3
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Protfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Protfolio 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Protfolio 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Protfolio 3s
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Counters</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Shop Details
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Pricing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Testimonial
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">404</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blogs" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Blog Page
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Blog Details
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarIndex;
