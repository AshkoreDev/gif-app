import React, { useReducer } from 'react';
import { useLocation } from 'wouter';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const ACTIONS = {
	UPDATE_KEYWORD: 'update_keyword',
	UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {

	switch(action.type) {
		
		case ACTIONS.UPDATE_KEYWORD:
			return {
				...state,
				keyword: action.payload
			}

		case ACTIONS.UPDATE_RATING:
			return {
				...state,
				rating: action.payload
			}
		
		default:
			return state;
	}
};

const SearchInput = ({ initialKeyword = '', initialRating = 'g' }) => {
	
	const [path, pushLocation] = useLocation();

	const [state, dispatch] = useReducer(reducer, {
		keyword: decodeURIComponent(initialKeyword),
		rating: initialRating
	});

	const { keyword, rating } = state;

	const handleSubmit = (e) => {

		e.preventDefault();
		pushLocation(`/search/${keyword}/${rating}`);
	}

	const handleChange = (e) => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value });

	const HandleChangeRating = (e) => dispatch({ type: ACTIONS.UPDATE_RATING, payload: e.target.value });

	return (

		<form onSubmit={handleSubmit}>
			<div>
				<input type="text" value={keyword} placeholder="..." onChange={handleChange}/>
				<button>Buscar</button>
			</div>
			<div>
				<select name="ratingOptions" id="ratingOptions" value={rating} onChange={HandleChangeRating}>
					{ RATINGS.map(rating => <option key={rating}>{rating}</option>) }
				</select>
			</div>
			
		</form>

	);
};

export default React.memo(SearchInput);