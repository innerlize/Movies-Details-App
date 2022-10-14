import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WavyLink } from 'react-wavy-transitions';
import { MutatingDots } from  'react-loader-spinner';
import axios from "axios";
import './Movie_Details.css';


function MovieDetails() {
	const [movie, setMovie] = useState([]);
	const { movieId } = useParams();


	const getMovie = async (id) => {
		try {
	    	let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9a16eddb49727a1557186790e55426e6`);

	    	let movieDetails = res.data;

			setMovie(movieDetails);
		}

		catch(error) {
			console.log('Error! D:<')
		}
	}


	useEffect(() => {
		setTimeout(() => {
			getMovie(movieId);
		}, 800)
	}, [movieId])


	if(movie.length === 0) {
		return(
			<MutatingDots 
				height="100"
				width="100"
				color="#199EFF"
				secondaryColor= '#FFFF00'
				radius='12.5'
				ariaLabel="mutating-dots-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		)
	} else {
		return(
			<div className='movie_details_container'>
				<p>{movie.title}</p>
				<img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} width='50vw' />
				<p>{console.log(movie)}</p>
				<WavyLink className='movie_details_container-back' to='/' color='#199EFF'> Volver </WavyLink>
			</div>
		)
	}
}


export default MovieDetails;