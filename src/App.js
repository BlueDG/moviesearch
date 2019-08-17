import React, {useEffect, useState} from 'react';
import './App.css';
import ax from "axios"

export default function App() {
  const [results, setResults] = useState([])
  const [request, setRequest] = useState()
  const [note, setNote] = useState(0)

  // useEffect(()=> {
  //   ax.get('https://api.themoviedb.org/3/search/movie', {
  //     params: {
  //       api_key: process.env.REACT_APP_API_KEY,
  //       query: request,
  //     },
  //   })
  //   .then(res => {
  //     setResults(res.data.results)
  //   })}, [request])

  useEffect(()=> {
    ax.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${request && request.replace(' ', '+').toLowerCase()}`
    )
    .then(res => {
      setResults(res.data.results)
    })}, [request])

  return (
    <div className="App">
      <input type="text" placeholder="search movie..." onChange={(e)=> setRequest(e.target.value)}/>
      <label>Minimum rating</label>
      <select onChange={(e)=> setNote(e.target.value)}>
        {Array.from({length: 10}).map((_, i)=> 
            <option key={i}>{i}</option>
          )}
      
      </select>
{results.length > 0 && results.filter(r=> r.vote_average > note).map((r,i)=>{
  return <div key={i}>{r.title}</div>
})}
    </div>
  );
}
