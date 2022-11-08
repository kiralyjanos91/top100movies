import React from "react"
import { useNavigate } from "react-router-dom"
import { Container , Col , Row , Button , Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import BackgroundImage from "../images/cover-image.jpg"
import "./homepage.css"

export default function HomePage(){

    const movies = useSelector((state)=>state.moviesList.movies)
    const randomNumber = parseInt(Math.random() * (99-12) + 12)
    const navigate = useNavigate()

    const randomMovie = movies.length > 0 ?
        movies.find((movie)=>movie.rank === (randomNumber + 1))
        :
        null     

    const moviesGrid = movies.filter((movie)=>
        movie.rank <= randomNumber && movie.rank > randomNumber - 12 ).map((movie,index)=>
            <Col md="2" lg="1" className="movie-grid-element" key={index}>
                <div className="poster">
                    <Link to={`/movie/${movie.rank}`}>
                        <img className="movie-grid-image" src={movie.image} alt={`Movie ${index}`} />
                    </Link>
                </div>
            </Col>
    )

    return(
        <>
            <div className="header-container" 
                style={{
                    background:`url(${BackgroundImage}) no-repeat`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div 
                    className="header" 
                >

                        
                    <Container>
                        <Row className="header-row">
                            <Col md="6" className="headline-col">
                                <h1 className="header-text">
                                    100 Best Movies of All Time That You Should Watch Immediately
                                </h1>
                                <Button as={Link} to="/top100">Check Them Now</Button>
                            </Col>
                            <Col md="6" className="random-movie-col">
                                {
                                    movies.length > 0 ?
                                    <> 
                                        <p>Rank: {randomMovie.rank}/100</p>
                                        <img 
                                            className="random-movie-image" 
                                            src={randomMovie.image} 
                                            alt="random-movie"
                                            onClick={()=>{navigate(`/movie/${randomNumber + 1}`)}}
                                        />   
                                        <p>*random pick from the list</p>
                                    </>
                                :
                                    <Spinner animation="border" className="random-movie-spinner" />
                                }
                            </Col>
                        </Row>
                    </Container>   
                </div>
            </div>
            <Container className="posters-list-container">
                <Row>
                    {moviesGrid}
                </Row>
            </Container>
        </>
    )
}