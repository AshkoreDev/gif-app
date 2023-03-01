import React, { useState } from 'react';

const SearchInput = ({ onSubmit }) => {
	
	const [keyword, setKeyword] = useState('');

	const handleSubmit = (e) => {

		e.preventDefault();
		onSubmit({ keyword });
	}

	const handleChange = (e) => setKeyword(e.target.value);

	return (

		<form onSubmit={handleSubmit}>
			<button>Buscar</button>
			<input type="text" value={keyword} placeholder="..." onChange={handleChange} />
		</form>

	);
};

export default SearchInput;