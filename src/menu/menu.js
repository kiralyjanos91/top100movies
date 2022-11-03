import react from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Container , Nav , Navbar } from "react-bootstrap"
import "./menu.css"

export default function Menu(){

  const savedMovies = useSelector((state)=>state.savedList.saved)
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/top100">Top 100</Nav.Link>
              <Nav.Link as={Link} to="/saved">
                Saved Movies <span className="saved-count">{savedMovies.length}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}