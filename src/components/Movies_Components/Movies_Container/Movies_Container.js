import React, { useState, useEffect } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import axios from "axios";
import MovieItem from './Movie_Item/Movie_Item.js';



function MoviesContainer() {
  const [movies, setMovies] = useState([]);


  const getMovies = async () => {
    try {
      let res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9a16eddb49727a1557186790e55426e6');

      let moviesData = res.data.results;
      
      console.log(res)
      setMovies(moviesData);
    }

    catch(error) {
      console.log('Error! D:')
    }
  }


  useEffect(() => {
    setTimeout(() => {
      getMovies();
    }, 1000)
  }, [])


  if (movies.length === 0) {
    return(
      <MutatingDots
        className='dots'
        height="100"
        width="100"
        color="#199EFF"
        secondaryColor='#FFFF00'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    )
  }


  return (
    <section className='movies-container'>
      {
        movies.map(movie => {
          return(
            <MovieItem movie={movie} key={movie.id} />
          )
        })
      }
    </section>
  )
}



export default MoviesContainer;