import React, {useEffect, useState}from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import './NavBar.css';


export default function navbar(){
  const handleClick = () => {
    
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = randomColor;
    // window.setTimeout(handleClick(), 1000);  
  };
  return (
    
    //container starts
    <div className='container'>
   <Navbar className="NavBar__bg rounded shadow" collapseOnSelect expand="lg" bg ="none" variant="dark" fixed="top">
      {/* <Container> */}
        <Navbar.Brand className="Brand_Item" onClick={handleClick} as = {NavLink} to="/home" >Oskar Ullsten</Navbar.Brand>
        <Navbar.Toggle className="Hamburger" aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {NavLink} to="/aboutme" eventKey="1">About me</Nav.Link>
            <Nav.Link as = {NavLink} to="/myresume" eventKey="2">Resume</Nav.Link>
            <Nav.Link as = {NavLink} to="/portfolio" eventKey="3">Portfolio</Nav.Link>
            <Nav.Link as = {NavLink} to="/photos" eventKey="4">Photos</Nav.Link>
            <Nav.Link as = {NavLink} to="/ContactUs" eventKey="5">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item as = {NavLink} to="#action/3.1" eventKey="7">Action</NavDropdown.Item>
              <NavDropdown.Item as = {NavLink} to="#action/3.2" eventKey="8">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as = {NavLink} to="#action/3.3" eventKey="9">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as = {NavLink} to="#action/3.4" eventKey="10">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets"></Nav.Link> */}
            <Nav.Link eventKey={2} as = {NavLink} to="/Home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
      
    </Navbar> 
    
    </div>
    //container ends
  )
}

