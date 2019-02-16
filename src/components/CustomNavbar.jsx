import React, { Component } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import './CustomNavbar.css';
import {LinkContainer} from 'react-router-bootstrap';

class CustomNavbar extends Component {
  render() {
    return (
      
      <Navbar expand = "lg">
        <Container>
          <Navbar.Brand href = "./">Enigma Assignment</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav >
                    <Nav.Item >
                      <LinkContainer  to = "./">
                      <Nav.Link eventkey = {1}   >Home</Nav.Link>
                      </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                      <LinkContainer to = "./Register" >
                      <Nav.Link eventkey = {2}    >Register</Nav.Link> 
                      </LinkContainer> 
                    </Nav.Item>
                    <Nav.Item>
                      <LinkContainer to = "./Login">
                      <Nav.Link eventkey = {3}    >Login</Nav.Link> 
                      </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                      <LinkContainer to = "./Display">
                      <Nav.Link eventkey = {4}    >Display</Nav.Link> 
                      </LinkContainer>
                    </Nav.Item>
                  </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    )
  }
}

export default CustomNavbar;