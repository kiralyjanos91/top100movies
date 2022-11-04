import React, { useState } from "react"
import { useParams , useNavigate } from "react-router-dom"
import { Container , Row , Col , Spinner, Button } from "react-bootstrap"
import { addToSavedList , removeFromSavedList } from "../savedlist/savedListSlice"
import { useSelector , useDispatch } from "react-redux"
import { setLastGenre } from "../toplist/lastGenreSlice"
import StarIcon from "../images/star.png"
import SaveIcon from "../images/emptysave.png"
import SavedIcon from "../images/filledsave.png"
import "./movie.css"

export default function Movie(){

    const navigate = useNavigate()
    const { movieRank } = useParams()
    const dispatch = useDispatch()
    const savedMovies = useSelector((state)=>state.savedList.saved)
    const movies = useSelector((state)=>state.moviesList.movies)
    const movie = movies.find(( movie ) => movie.rank === parseInt(movieRank))
    let embedTrailer = ""
    const [ iframeIsLoading , setIframeIsLoading ] = useState(true)
    
    if(movies.length > 0){
        embedTrailer = movie.trailer.replace("watch?v=","embed/")
    }

    const genresLinks = movie.genre.replace(/\s/g,'').split(",").map((genre,index)=>
        <span
            className="genre-link"
            key={index}
            onClick={
                ()=>{
                    dispatch(setLastGenre(genre))
                    navigate("/top100")
                }
            }
        >
            {genre}
        </span>
    )

    return(
        <>
            {movies.length > 0 &&
                <Container className="movie-container">
                    <Row className="title-row">
                        <Col>
                            <h1>
                                {movie.rank}. {movie.title}
                            </h1>
                        </Col>
                        {
                            savedMovies.includes(movie.id) ?
                            <Col 
                                className="save-unsave" 
                                onClick={() => dispatch(removeFromSavedList(movie.id))}
                            >
                                <img src={SavedIcon} alt="saved-icon" />
                            </Col>
                            :
                            <Col 
                                className="save-unsave" 
                                onClick={() => dispatch(addToSavedList(movie.id))}
                            >
                                <img src={SaveIcon} alt="save-icon" />
                            </Col>
                        }
                    </Row>
                    <Row>
                        <Col className="rating">
                            IMDb rating: <img className="star-icon" src={StarIcon} alt="rating-icon"/>{movie.rating}/10
                        </Col>
                        <Col className="year">
                            Year: {movie.year}
                        </Col>
                    </Row>
                    <Row className="header-row">
                        <Col md="4" className="image-col">
                            <img className="image" src={movie.image} alt={movie.title} />
                        </Col>
                        <Col md="8" className="trailer-col">
                            {iframeIsLoading &&
                                <Spinner animation="border" className="iframespinner" />
                            }
                            <div className="trailer-iframe-div">
                                <iframe className="trailer-iframe" onLoad={()=>{setIframeIsLoading(false)}} src={embedTrailer} title={movie.title} allowFullScreen />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="description">
                            <p>
                                {movie.description}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                            <p>
                                Genre: {genresLinks}
                            </p>
                            <hr />
                            <p>
                                Writers: {movie.writers}
                            </p>
                            <hr />
                            <p>
                                Director: {movie.director}
                            </p>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="imdb-button-col">
                            <Button href={`https://www.imdb.com/title/${movie.imdbid}/`} target="_blank">Check on IMDb</Button>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}