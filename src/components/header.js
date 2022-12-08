import React from 'react'
import { Link } from "gatsby"
import {Nav, Navbar} from 'react-bootstrap'

import { StaticImage } from "gatsby-plugin-image"



export default function header() {
  return (
    <Navbar expand="lg shadow mb-5">
      <div className='header-wrap container-lg'>
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
            <Nav.Link  href="/"><span className="stylesMenu">HOME</span></Nav.Link>
            <Nav.Link  href="/"><span className="stylesMenu">BLOG</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </div>
    </Navbar>
  )
}
