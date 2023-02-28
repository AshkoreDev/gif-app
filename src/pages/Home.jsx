import React, { useState } from 'react';
import { useLocation } from 'wouter';
import CardsList from './../components/CardsList.jsx';
import { useGifs } from './../hooks/useGifs.jsx';
import Spinner from './../components/Spinner';

const Home = () => {
	
	const [keyword, setKeyword] = useState('');
	const [path, pushLocation] = useLocation();
	const { loading, gifs } = useGifs();

	const handleSubmit = (e) => {

		e.preventDefault();
		pushLocation(`/search/${keyword}`);
	}

	const handleChange = (e) => setKeyword(e.target.value);

	return (

		<>
			<form onSubmit={handleSubmit}>
				<button>Buscar</button>
				<input type="text" value={keyword} placeholder="..." onChange={handleChange} />
			</form>

			<section className="container">
				<h2 class="container--title">Última búsqueda</h2>
				{ loading
						? <Spinner/>
						: <CardsList gifs={gifs} />
				}
			</section>
		</>

	);
};

export default Home;