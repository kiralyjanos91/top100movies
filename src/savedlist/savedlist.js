import React from "react"
import { Container , Col , Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector , useDispatch } from "react-redux"
import { removeFromSavedList } from "./savedListSlice"
import TrashIcon from "../images/delete.png"
import "./savedlist.css"

export default function SavedList(){
    const dispatch = useDispatch()
    const movies = useSelector((state)=>state.moviesList.movies)
    const savedIds = useSelector((state)=>state.savedList.saved)

    const savedMoviesList = savedIds.map((savedId,index)=>{
        const savedMovie = movies.find((movie)=>movie.id === savedId)
        return (
            <Col md="3" key={index}>
                {movies.length > 0 &&
                    <div className="saved-list-element">
                        <div className="poster">
                            <Link to={`/movie/${savedMovie.rank}`}>
                                <img 
                                    src={savedMovie.image}
                                    alt={savedMovie.title}
                                    className="saved-list-image"
                                />
                            </Link>
                        </div>
                        <div className="delete-icon"
                            onClick={() => dispatch(removeFromSavedList(savedMovie.id))}
                        >
                            <img src={TrashIcon} alt="delete-icon" />
                        </div>
                    </div>
                }
            </Col>
        )
    })

    return(
        <Container>
            <Row className="posters-list-row">
                {savedMoviesList}
            </Row>
        </Container>
    )
}