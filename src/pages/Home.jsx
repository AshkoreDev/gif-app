import React, { useState } from 'react';
import { useLocation } from 'wouter';
import CardsList from './../components/CardsList.jsx';
import { useGifs } from './../hooks/useGifs.jsx';

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

			<h2>Última búsqueda</h2>
			{ loading
					? 'cargando'
					: <CardsList gifs={gifs} />
			}
		</>

	);
};

export default Home;