import React from 'react'
import { Link } from "gatsby"
import {Nav, Navbar, Container} from 'react-bootstrap'

import { StaticImage } from "gatsby-plugin-image"



export default function header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Link className="link-logo" to="/">
        <Navbar.Brand >
            <StaticImage
            className="logo"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/logo.png"
            width={140}
            height={60}
            quality={95}
            alt="Profile picture"
            />
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar-ds" id="basic-navbar-nav">
          <Nav className="me-auto ml-1">
            <Nav.Link className="stylesMenu" href="/">HOME</Nav.Link>
            <Nav.Link className="stylesMenu" href="/">BLOG</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
