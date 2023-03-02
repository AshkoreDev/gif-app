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
			<input type="text" value={keyword} placeholder="..." onChange={handleChange}/>
			<button>Buscar</button>
		</form>

	);
};

export default React.memo(SearchInput);