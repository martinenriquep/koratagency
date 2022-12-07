import React from 'react'
import { Link } from "gatsby"
import {Nav, Navbar, Container} from 'react-bootstrap'

import { StaticImage } from "gatsby-plugin-image"



export default function header() {
  return (
    <Navbar expand="lg shadow mb-5">
      <Container className='header-wrap'>
        <Link className="link-logo" to="/">
        <Navbar.Brand >
            <StaticImage
            className="logo"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/logo.png"
            quality={95}
            alt="Profile picture"
            />
        </Navbar.Brand>
        </Link>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar-ds" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="stylesMenu" href="/">HOME</Nav.Link>
            <Nav.Link className="stylesMenu" href="/">BLOG</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}
