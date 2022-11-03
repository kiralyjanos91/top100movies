import React, { useState } from "react"
import { Container , Row , Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import StarIcon from "../images/star.png"
import "./toplist.css"

export default function Toplist(){
    
    const movies = useSelector((state)=>state.moviesList.movies)
    const [ listView , setListView ] = useState("posters")

    const moviesList = movies.map(( movie , index ) => 
        <Link to={`/movie/${movie.rank}`}>
            <Row className="top-100-row" key={index}>
                <Col className="rank">
                    {movie.rank}
                </Col>
                <Col className="thumbnail">
                    <img src={movie.thumbnail} alt={`movie ${index}`} />
                </Col>
                <Col className="movie-name">
                    {movie.title}
                </Col>
                <Col className="rating-col">
                    <img className="star-icon" src={StarIcon} alt="rating-icon"/> {movie.rating}/10
                </Col>
            </Row>
        </Link>
    )

    const postersList = movies.map((movie,index)=>
        <Col md="3" className="movie-grid-element" key={index}>
            <div className="poster">
                <Link to={`/movie/${movie.rank}`}>
                    <img className="movie-grid-image" src={movie.image} alt={`Movie ${index}`} />
                </Link>
            </div>
        </Col>
    )

    const selectedStyle = {
        color: "#5799EF"
    }

return(
    <Container className="top100movies">
        <Row>
            <Col>
                <h1>Top 100</h1>
            </Col>
            <Col>
                <p className="view-select">
                    <span style={listView === "posters" ? selectedStyle : null} onClick={()=>setListView("posters")}>Posters</span>
                    <span className="separator">|</span>
                    <span style={listView === "list" ? selectedStyle : null} className={selectedStyle} onClick={()=>setListView("list")}>List</span>
                </p>
            </Col>
        </Row>
        {listView === "posters" ?
            <Row className="posters-list-row">
                    {postersList}
            </Row>
            :
            <Row>
                {moviesList}
            </Row>
        }
    </Container>
)
}