import React from 'react';
import { useLocation } from 'wouter';
import { useForm } from './../hooks/useForm.js';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const LANGS = ['en', 'es', 'pt', 'id', 'fr', 'ar', 'tr', 'th', 'de', 'it', 'ja', 'ru', 'zh-CN', 'zh-TW', 'ko', 'pl', 'nl', 'ro', 'hu', 'sv', 'cs', 'hi', 'bn', 'da', 'fa', 'tl', 'fi', 'he', 'ms', 'no', 'uk'];


function SearchInput({ initialKeyword = '', initialRating = 'g', initialLang = 'en' }) {
	
	const [path, pushLocation] = useLocation();
	const { keyword, rating, lang, updateKeyword, updateRating, updateLang } = useForm({ initialKeyword, initialRating, initialLang });

	const handleSubmit = (e) => {

		e.preventDefault();
		pushLocation(`/gif-app/search/${keyword}/${rating}/${lang}`);
	}

	const handleChangeKeyword = (e) => updateKeyword(e.target.value);
	
	const HandleChangeRating = (e) => updateRating(e.target.value);
	
	const HandleChangeLang = (e) => updateLang(e.target.value);
	
	return (

		<form onSubmit={handleSubmit}>

			<div>
				<input type="text" value={keyword} placeholder="..." onChange={handleChangeKeyword}/>
				<button>Buscar</button>
			</div>

			<div>
				<select name="ratingOptions" id="ratingOptions" value={rating} onChange={HandleChangeRating}>
					{ RATINGS.map(rating => <option key={rating} value={rating}>{rating}</option>) }
				</select>

				<select name="langsOptions" id="langsOptions" value={lang} onChange={HandleChangeLang}>
				{ LANGS.map(lang => <option key={lang} value={lang}>{lang}</option>) }
				</select>
			</div>
			
		</form>

	);
};

export default React.memo(SearchInput);