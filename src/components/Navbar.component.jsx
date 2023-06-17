import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant = "dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">ExerTracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Exercises</Nav.Link>
              <Nav.Link href="/create">Create Exercise Log</Nav.Link>
              <Nav.Link href="/user">Create User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
      
    );
  }
  
  export default Header;