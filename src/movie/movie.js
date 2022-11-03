import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { Container , Row , Col , Ratio , Spinner } from "react-bootstrap"
import { addToSavedList , removeFromSavedList } from "../savedlist/savedListSlice"
import { useSelector , useDispatch } from "react-redux"
import StarIcon from "../images/star.png"
import "./movie.css"

export default function Movie(){
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

    return(
        <>
            {movies.length > 0 &&
                <Container className="movie-container">
                    <Row>
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
                                Unsave Movie
                            </Col>
                            :
                            <Col 
                                className="save-unsave" 
                                onClick={() => dispatch(addToSavedList(movie.id))}
                            >
                                Save Movie
                            </Col>
                        }
                    </Row>
                    <Row>
                        <Col className="rating">
                            IMDb rating: <img className="star-icon" src={StarIcon} alt="rating-icon"/>{movie.rating}/10
                        </Col>
                        <Col className="year">
                            {movie.year}
                        </Col>
                    </Row>
                    <Row className="header-row">
                        <Col className="image">
                            <img src={movie.image} alt={movie.title} />
                        </Col>
                        <Col className="trailer-col">
                            {iframeIsLoading &&
                                <Spinner animation="border" className="iframespinner" />
                            }
                            <Ratio aspectRatio="16x9" className="trailer-iframe">
                                <iframe onLoad={()=>{setIframeIsLoading(false)}} src={embedTrailer} title={movie.title} allowFullScreen />
                            </Ratio>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="description">
                            <p>
                                {movie.description}
                            </p>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}