import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({theme: theme}) => {
  return(
    <Navbar expand="lg" className={`navbar navbar-dark ${theme}`}>
      <Link to="/" className="nav-link">
        Alloy Mix Inc
      </Link>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <div className="navbar-nav">
          <Link to="/projects" className="nav-link nav-item ">
            Projects
          </Link>
          <Link to="/contact" className="nav-link nav-item ">
            Contact
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;