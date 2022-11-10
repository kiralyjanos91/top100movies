import React from "react"
import { Link } from "react-router-dom"
import { Container , Row , Col, Button } from "react-bootstrap"
import "./emptylist.css"

export default function EmptyList(){
    return(
        <Container className="empty-list-container">
            <Row>
                <Col className="empty-list-col">
                    <h1>
                        Your list is empty
                    </h1>
                    <p>
                        Check the list and add some movies
                    </p>
                    <Button as={Link} to="/top100">Check List</Button>
                </Col>
            </Row>
        </Container>
    )
}