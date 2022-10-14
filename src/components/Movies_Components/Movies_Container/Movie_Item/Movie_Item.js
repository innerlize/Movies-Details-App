import React from 'react';
import { Link } from 'react-router-dom';
import { WavyLink } from 'react-wavy-transitions';


function MovieItem({ movie }) {
	return(
        <div className='movies-item' key={movie.id}>
        	<img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} />
            <div className='movies-item-data'>
                <p className='movies-item-data_title'>{movie.title}</p>
                <p className='movies-item-data_rate'><span>★</span> {movie.vote_average}</p>
                <WavyLink to={`/movie/${movie.id}`} color='#FFFF00'>More Details</WavyLink>
            </div>
        </div>
    )
}


export default MovieItem;