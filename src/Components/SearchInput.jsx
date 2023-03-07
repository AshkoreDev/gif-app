import React, { useReducer } from 'react';
import { useLocation } from 'wouter';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const LANGS = ['en', 'es', 'pt', 'id', 'fr', 'ar', 'tr', 'th', 'de', 'it', 'ja', 'ru', 'zh-CN', 'zh-TW', 'ko', 'pl', 'nl', 'ro', 'hu', 'sv', 'cs', 'hi', 'bn', 'da', 'fa', 'tl', 'fi', 'he', 'ms', 'no', 'uk'];

const ACTIONS = {
	UPDATE_KEYWORD: 'update_keyword',
	UPDATE_RATING: 'update_rating',
	UPDATE_LANG: 'update_lang'
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

		case ACTIONS.UPDATE_LANG:
			return {
				...state,
				lang: action.payload
			}
		
		default:
			return state;
	}
};

const SearchInput = ({ initialKeyword = '', initialRating = 'g', initialLang = 'en' }) => {
	
	const [path, pushLocation] = useLocation();

	const [state, dispatch] = useReducer(reducer, {
		keyword: decodeURIComponent(initialKeyword),
		rating: initialRating,
		lang: initialLang
	});

	const { keyword, rating, lang } = state;

	const handleSubmit = (e) => {

		e.preventDefault();
		pushLocation(`/search/${keyword}/${rating}/${lang}`);
	}

	const handleChange = (e) => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: e.target.value });

	const HandleChangeRating = (e) => dispatch({ type: ACTIONS.UPDATE_RATING, payload: e.target.value });

	const HandleChangeLang = (e) => dispatch({ type: ACTIONS.UPDATE_LANG, payload: e.target.value });

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

				<select name="langsOptions" id="langsOptions" value={lang} onChange={HandleChangeLang}>
				{ LANGS.map(lang => <option key={lang}>{lang}</option>) }
				</select>
			</div>
			
		</form>

	);
};

export default React.memo(SearchInput);

// https://developers.giphy.com/docs/optional-settings/#language-support