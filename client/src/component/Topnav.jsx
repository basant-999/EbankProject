import React from 'react'
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../images/img7.jpeg"

const Topnav = () => {
  return (
   
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={logo} alt="" height="50px" />
        {/* <Navbar.Brand href="#home">Ebank</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="registration">createAccount</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="about">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                benifit
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Topnav