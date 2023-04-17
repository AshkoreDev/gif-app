import React from 'react';
import { Helmet } from 'react-helmet';

import CardsList from './../components/CardsList.jsx';
import SearchInput from './../components/SearchInput.jsx';
import LazyTrendingSearches from './../components/LazyTrendingSearches.jsx';

import { useGifs } from './../hooks/useGifs.js';

function Home() {
	
	const { loading, gifs } = useGifs();

	const title = 'Gif App | Buscador de Gifs';
	const description = 'Gif-App, página para buscar Gifs';
	
	return (

		<>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description}/>
			</Helmet>

			<SearchInput/>

			<section className="home">
				<section className="container home__container">
					<h2 className="container--title">Última búsqueda</h2>
					<CardsList gifs={gifs} loading={loading}/>
				</section>

				<LazyTrendingSearches loading={loading}/>
			</section>
		</>

	);
};

export default Home;