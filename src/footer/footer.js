import React from "react"
import { Container , Col , Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./footer.css"

export default function Footer(){
    return(
        <div className="footer">
            <Container>
                <Row>
                    <Col className="footer-logo-col">
                        <h1>
                            LOGO PLACEHOLDER
                        </h1>
                    </Col>
                    <Col className="footer-links-col">
                        <Link to="/">
                            Home 
                        </Link>
                    
                        <Link to="/top100">
                            Top100
                        </Link>
                    
                        <Link to="/saved">
                            Saved Movies
                        </Link>                       
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright">
                <a>Copyright Ⓒ2022 - Top100movies.com</a>
            </div>
        </div>
    )
}