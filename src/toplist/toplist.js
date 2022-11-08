import React, { useState } from "react"
import { Container , Row , Col , Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setLastGenre } from "./lastGenreSlice"
import genresList from "./genreslist"
import StarIcon from "../images/star.png"
import "./toplist.css"

export default function Toplist(){
    
    const dispatch = useDispatch()
    const lastGenre = useSelector((state)=>state.lastGenre.last)
    const movies = useSelector((state)=>state.moviesList.movies)
    const [ listView , setListView ] = useState("posters")

    const moviesList = movies.filter((movie) =>
        lastGenre === "All" ? 
            movie 
        : 
            movie.genre.replace(/\s/g,'').split(",").includes(lastGenre)).map(( movie , index ) => 
                <Link to={`/movie/${movie.rank}`} key={index}>
                    <Row className="top-100-row">
                        <Col className="rank">
                            Rank: {movie.rank}
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

    const postersList = movies.filter((movie) =>
        lastGenre === "All" ? 
            movie 
        : 
            movie.genre.replace(/\s/g,'').split(",").includes(lastGenre)).map((movie,index) =>
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

    const genresDropdown = genresList.map((genre,index)=>
        <Dropdown.Item id={genre} onClick={(e)=>{dispatch(setLastGenre(e.target.id))}}>{genre}</Dropdown.Item>
    )

return(
    <Container className="top100movies">
        <Row>
            <Col>
                <h1>Top 100 {lastGenre === "All" ? "" : `- ${lastGenre}`}</h1>
            </Col>
        </Row>
        <Row className="genre-and-view-row">
            <Col className="dropdown-col">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter by Genre
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        {genresDropdown}
                    </Dropdown.Menu>
                </Dropdown>
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