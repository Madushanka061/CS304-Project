import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavScroll.css";
import {Link} from "react-router-dom";

function NavScroll() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <div className="navleft">
          <Navbar.Brand href="#">DOMESTIC HUB</Navbar.Brand>
        </div>
        <div className="navright">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="service">Service</Nav.Link>
            <NavDropdown title="Acount" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contactus">ContactUs</Nav.Link>
          </Nav>
          <Button 
            style={{ width: "100px", height: "50px", marginRight: "20px" }}
            variant="outline-primary"
          >
           <a href="/login" style={{textDecoration:'none'}}>Login</a>
          </Button>{" "}
          <Button
            style={{ width: "100px", height: "50px" }}
            variant="outline-dark"
          >
            <a href="/register" style={{textDecoration:'none'}}>Signup</a>
          </Button>
        </Navbar.Collapse>
        </div>
        
      </Container>
    </Navbar>
  );
}

export default NavScroll;
