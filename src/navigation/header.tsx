import { Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";
function Header() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Register</Nav.Link>
                <Nav.Link href="/">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Toggle>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
