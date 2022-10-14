import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { WavyContainer, WavyLink } from 'react-wavy-transitions';
import MoviesContainer from '../components/Movies_Components/Movies_Container/Movies_Container.js';
import MovieDetails from '../components/Movies_Components/Movie_Details/Movie_Details.js';
import NotPage from '../components/NotPage/NotPage.js';



function Router() {
	return(
		<BrowserRouter>
			<WavyContainer />
			<Routes>
				<Route path='/' element={<MoviesContainer />} />
				<Route path='/movie/:movieId' element={<MovieDetails />} />
				<Route path='*' element={<NotPage />} />
			</Routes>
		</BrowserRouter>
	)
}



export default Router;