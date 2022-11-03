import React, { useState , useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container , Row , Col } from "react-bootstrap"
import { Link , Route , Routes } from "react-router-dom"
import { useDispatch , useSelector } from "react-redux"
import { addMovies } from "./movieslist/moviesListSlice"
import "./App.css"
import Menu from "./menu/menu"
import HomePage from "./homepage/homepage"
import Toplist from "./toplist/toplist"
import Movie from "./movie/movie"
import SavedList from "./savedlist/savedlist"
import Footer from "./footer/footer"

export default function App(){

  const savedMovies = useSelector((state) => state.savedList.saved)
  const [ isError , setIsError ] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    localStorage.setItem("moviesSavedList" , JSON.stringify(savedMovies))
  },[savedMovies])

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    
    fetch('secret key', options)
      .then(response => {
        if (response.status === 200){
            return response.json()
        }
        else {
          throw new Error("Failed to fetch")
        }
      })
      .then(response => dispatch(addMovies(response)))
      .catch(err => {
        setIsError(true)
        dispatch(addMovies([]))
        console.error(err)
      });
  },[])

  return(
    <>
      {!isError ? 
        <>
          <Menu />
          <Container className="app">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/top100" element={<Toplist />} />
              <Route path="/movie/:movieRank" element={<Movie />} />
              <Route path="/saved" element={<SavedList />} />
            </Routes>
          </Container>
          <Footer />
        </>
      :
        <Container className="error-container">
          <Row>
            <Col>
              <h1 className="error-message">Something Went Wrong, please come back later</h1>
            </Col>
          </Row>
        </Container>
      }
    </>
  )
}