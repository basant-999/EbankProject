
import React, { useEffect } from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {  Row, Col, Card } from "react-bootstrap";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import daslogo from "../images/img2.jpeg"
// import logut from "../images/logoimg.jpeg"
const Dashboard = () => {
    let username = localStorage.getItem("username")
    let email = localStorage.getItem("email")
const navigate = useNavigate()

    const logout = ()=>{
        navigate("/home")
        localStorage.clear()
       
    }
    useEffect(()=>{
        if(!localStorage.getItem("email"))
            {
                navigate("/home")
            }
    },[])
  return (
    <>
  <Navbar expand="lg" bg="light" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Brand href="#">
      <div id='logoimg'>
        <img src={daslogo} alt="" style={{borderRadius:"10px", height:"40px"}}/> <span><h1></h1></span>
    </div>
      </Navbar.Brand>
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link as={Link}  to="balanceinquiry">Balance Inquiry</Nav.Link>
          <Nav.Link as={Link} to="accountstatement" >Account Statement</Nav.Link>
          <Nav.Link as={Link} to="ministatement" >Mini Statement</Nav.Link>
          <Nav.Link as={Link} to="submitcash">Submit Cash Amount</Nav.Link>
          <Nav.Link as={Link} to="withdrawcash">Withdrawal Amount</Nav.Link>
          <Nav.Link as={Link} to="reset">Reset Password</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="d-flex align-items-center">
        <NavDropdown
          title={
            <img
              src="https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-13931.jpg?ga=GA1.1.1455700672.1724607350&semt=ais_hybrid"
              className="rounded-circle"
              height="30"
              alt="ddd"
              loading="lazy"
            />
          }
          align="end"
        >
          <NavDropdown.Item href="#" onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Container>
  </Navbar>
  <Container className="mt-3">
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="shadow-lg text-center p-4 border-0 rounded-4">
          <Card.Body>
            <h6 className="fw-bold text-primary">Welcome, {username}!</h6>
            <p className="text-muted fs-9">Your email is {email}</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>

<Outlet/>
<Footer/>
    </>
  )
}

export default Dashboard;