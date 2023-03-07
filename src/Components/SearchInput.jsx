import React, { useState } from 'react';
import { useLocation } from 'wouter';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchInput = ({ initialKeyword = '', initialRating = 'g' }) => {
	
	const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
	const [rating, setRating] = useState(initialRating);
	const [path, pushLocation] = useLocation();

	const handleSubmit = (e) => {

		e.preventDefault();
		pushLocation(`/search/${keyword}/${rating}`);
	}

	const handleChange = (e) => setKeyword(e.target.value);

	const HandleChangeRating = (e) => setRating(e.target.value);

	return (

		<form onSubmit={handleSubmit}>
			<select name="ratingOptions" id="ratingOptions" value={rating} onChange={HandleChangeRating}>
				{ RATINGS.map(rating => <option key={rating}>{rating}</option>) }
			</select>
			<input type="text" value={keyword} placeholder="..." onChange={handleChange}/>
			<button>Buscar</button>
		</form>

	);
};

export default React.memo(SearchInput);