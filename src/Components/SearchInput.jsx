import React, { useState } from 'react';
import { useLocation } from 'wouter';

const SearchInput = ({ onSubmit }) => {
	
	const [keyword, setKeyword] = useState('');
	const [path, pushLocation] = useLocation();

	const handleSubmit = (e) => {

		e.preventDefault();
		pushLocation(`/search/${keyword}`);
	}

	const handleChange = (e) => setKeyword(e.target.value);

	return (

		<form onSubmit={handleSubmit}>
			<input type="text" value={keyword} placeholder="..." onChange={handleChange}/>
			<button>Buscar</button>
		</form>

	);
};

export default React.memo(SearchInput);