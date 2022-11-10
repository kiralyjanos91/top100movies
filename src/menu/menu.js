import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Container , Nav , Navbar } from "react-bootstrap"
import Logo from "../images/logo.png"
import "./menu.css"

export default function Menu(){

  const savedMovies = useSelector((state)=>state.savedList.saved)
    return(
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={Logo} alt="logo" className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="/top100">Top 100</Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/saved">
                Saved Movies {savedMovies.length > 0 ? <span className="saved-count">{savedMovies.length}</span> : null}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}