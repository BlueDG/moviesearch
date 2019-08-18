import React, {useState, useEffect} from 'react'
import './App.css'
import {Text, Title} from "./components/Text"
import CardTemplate, {Container} from "./components/Card"
import Input from "./components/Input"
import Select from "./components/Select"
import ax from 'axios'

export default function App() {
  const [request, setRequest] = useState()
  const [movies, setMovies] = useState([])
  const [rating, setRating] = useState(0)

  useEffect(()=> {
    ax.get('https://api.themoviedb.org/3/search/movie', {
      params: {api_key: process.env.REACT_APP_API_KEY, query: request}
    })
    .then(res => setMovies(res.data.results))
    .catch(_=> setMovies([]))
  }, [request])

  return (
    <>
    <Title>Movie App</Title>
    <Container>
    <Input setRequest={setRequest}/>
    <Select setRating={setRating}/>
    </Container>
    <Container>
    {movies.length > 0 ? movies.filter(movie=> movie.vote_average >= rating)
    .map((movie, i)=> <CardTemplate movie={movie} key={i}/>)
    :<Text>no movies available</Text>}
    </Container>
    </>
  )
}