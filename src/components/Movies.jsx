import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

const Container= styled.div` 
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Movies = ({cat, filters, sort}) => {

    const [movies, setmovies] = useState([])
    const [filteredMovies, setFilteresMovies] = useState([])

    useEffect(() =>{
        const getMovies = async () => {
            try{
                const res = await axios.get(
                    cat 
                      ? `http://localhost:4000/mov/peliculas/genero/${cat}`
                      :  `http://localhost:4000/mov/peliculas/`
                )
                setmovies(res.data)
            }catch(error){}
        }
        getMovies()

    }, [cat])

    useEffect (() =>{
        cat &&
        setFilteresMovies(
            movies.filter((item)=> 
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        )
    }, [movies, cat, filters ])

    // useEffect(() =>{
    //     if(sort === ""){
    //         setFilteresMovies((prev)=>
    //          [...prev].sort((a,b) => a.estreno -)
    //         )
           
    //     }
    // })

  return (

    

      <Container>
          {
              cat 
                ? filteredMovies.map((item) => <Movie item={item} key={item.id} /> )
                : movies
                    .slice(0, 8)
                    .map((item) => <Movie item={item} key={item.id} /> )
          }
      </Container>
  )
};

export default Movies;
