import React, { useCallback } from 'react';
import { useLocation } from 'wouter';

import CardsList from './../components/CardsList.jsx';
import SearchInput from './../components/SearchInput.jsx';
import LazyTrendingSearches from './../components/LazyTrendingSearches.jsx';

import { useGifs } from './../hooks/useGifs.jsx';

const Home = () => {
	
	const [path, pushLocation] = useLocation();
	const { loading, gifs } = useGifs();

	const handleSubmit = useCallback(({ keyword }) => pushLocation(`/search/${keyword}`), [pushLocation]);

	return (

		<>
			<SearchInput onSubmit={handleSubmit}/>

			<section className="home">
				<section className="container home__container">
					<h2 className="container--title">Última búsqueda</h2>
					<CardsList gifs={gifs} loading={loading}/>
				</section>

				<LazyTrendingSearches/>
			</section>
		</>

	);
};

export default Home;