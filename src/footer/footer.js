import React from "react"
import { Container , Col , Row } from "react-bootstrap"
import { Link , useNavigate } from "react-router-dom"
import Logo from "../images/logo.png"
import "./footer.css"

export default function Footer(){

    const navigate = useNavigate()

    return(
        <div className="footer">
            <Container>
                <Row>
                    <Col className="footer-logo-col">
                        <img 
                            src={Logo} 
                            alt="footer-logo" 
                            className="footer-logo"
                            onClick={()=>{navigate("/")}}
                        />
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
                <p>Copyright Ⓒ2022 - TOP100FINEST</p>
            </div>
        </div>
    )
}