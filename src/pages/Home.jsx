import React, { useState } from 'react';
import { useLocation } from 'wouter';

const Home = () => {
	
	const [keyword, setKeyword] = useState('');
	const [path, pushLocation] = useLocation();

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
		</>

	);
};

export default Home;