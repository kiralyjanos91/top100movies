import React from "react"
import { Container , Col , Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./homepage.css"

export default function HomePage(){

    const movies = useSelector((state)=>state.moviesList.movies)

    const randomNumber = Math.random() * (100-8) + 8

    const moviesGrid = movies.filter((movie)=>
        movie.rank <= randomNumber && movie.rank > randomNumber - 8 ).map((movie,index)=>
            <Col md="3" className="movie-grid-element" key={index}>
                <div className="poster">
                    <Link to={`/movie/${movie.rank}`}>
                        <img className="movie-grid-image" src={movie.image} alt={`Movie ${index}`} />
                    </Link>
                </div>
            </Col>
    )

    return(
        <Container>
            <Row className="header">
                <Col>
                </Col>
            </Row>
            <Row className="posters-list-row">
                {moviesGrid}
            </Row>
        </Container>
    )
}