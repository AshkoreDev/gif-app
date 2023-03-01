import React from 'react';
import { useLocation } from 'wouter';

import Spinner from './../components/Spinner';
import CardsList from './../components/CardsList.jsx';
import LazyTrendingSearches from './../components/LazyTrendingSearches.jsx';
import SearchInput from './../components/SearchInput.jsx';

import { useGifs } from './../hooks/useGifs.jsx';

const Home = () => {
	
	const [path, pushLocation] = useLocation();
	const { loading, gifs } = useGifs();

	const handleSubmit = ({ keyword }) => pushLocation(`/search/${keyword}`);

	return (

		<>
			<SearchInput onSubmit={handleSubmit} />
			<section className="container">
				<h2 className="container--title">Última búsqueda</h2>
				{ loading
						? <Spinner/>
						: <CardsList gifs={gifs} />
				}
			</section>

			<LazyTrendingSearches />
		</>

	);
};

export default Home;