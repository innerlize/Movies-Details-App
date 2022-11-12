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
		}, 1000)
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
				<div className='movie_details_container-image'>
					<img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} width='50vw' />
				</div>
				<div className='movie_details_container-details'>
					<h3 className='movie_details_container-title'>{movie.title}</h3>
					<h5 className='movie_details_container-tagline'>{movie.tagline ? `"${movie.tagline}"` : null}</h5>
					<p className='movie_details_container-overview'>{movie.overview}</p>
					<div className='movie_details_container-data'>
						<div className='movie_details_container-data_row row1'>
							<p>Released: {movie.release_date} {console.log(movie)}</p>
							<p>Director: Messi</p>
							<p>Genre: {movie.genres.map(g => `${g.name}, `)}</p>
							<p>Status: {movie.status}</p>
							<p>Language: {movie.spoken_languages.map(l => `${l.name}, `)}</p>
						</div>
						<div className='movie_details_container-data_row row2'>
							<p>Runtime: {Math.floor(movie.runtime/60)}h {Math.floor(movie.runtime%60)}m</p>
							{movie.budget ? <p>Budget: ${movie.budget.toLocaleString('en-US')}</p> : null}
							{movie.revenue ? <p>Revenue: ${movie.revenue.toLocaleString('en-US')}</p> : null}
							<p>Production: {movie.production_companies.map(c => `${c.name}, `)}</p>
						</div>
					</div>
					<div className='movie_details_container-links'>
						<a href={movie.homepage} target='_blank'>{movie.homepage ? 'Official website' : null}</a>
						<WavyLink className='movie_details_container-back' to='/' color='#199EFF'> Volver </WavyLink>
					</div>					
				</div>
			</div>
		)
	}
}


export default MovieDetails;