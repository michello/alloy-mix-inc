import React from 'react'
import { HashRouter, Route, Link } from "react-router-dom"
import './NavBar.css'
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem
} from "shards-react";

const NavBar = ({theme: theme}) => {
  return(
    <Navbar className={`navbar justify-content-between ${theme}`}>
      <Link to="/" className="nav-link">
        Alloy Mix Inc
      </Link>
      <div className="navbar-side">
        <Link to="/projects" className="nav-link">
          Work
        </Link>
        <Link to="/" className="nav-link">
          Contact
        </Link>
      </div>
    </Navbar>
  )
}

export default NavBar;