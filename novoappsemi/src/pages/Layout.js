import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
    
const Layout = () => {
  return (
    <>
      <Row>
        <Col><Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="professor">Professor</Nav.Link>
            <Nav.Link href="desafio">Desafio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Layout;
