import React, { useRef, useEffect, useCallback } from 'react';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';

import CardsList from './../components/CardsList.jsx';
import SearchInput from './../components/SearchInput.jsx';

import { useGifs } from './../hooks/useGifs.jsx';
import { useNearScreen } from './../hooks/useNearScreen.jsx';

const SearchResults = ({ params }) => {
	
	const { keyword, rating = 'g', lang = 'en' } = params;
	const { loading, gifs, setPage } = useGifs({ keyword, rating, lang });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({ externalRef : loading ? null : externalRef, once: false });

	const title = gifs ? `Gif App | ${keyword} resultados` : '';
	const description = `Resultados de la búsqueda de ${keyword}`;
	
	const debounceHandleNextPage = useCallback(debounce(() => setPage(prevPage => prevPage + 1), 200), [setPage]);
	
	useEffect(() => {

		if(isNearScreen) {

			debounceHandleNextPage();
			console.log(gifs.length);
		}

	}, [isNearScreen, debounceHandleNextPage]);

	const handleUp = () => window.scrollTo(0, 0);

	return (

		<section className="container">
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description}/>
			</Helmet>

			<SearchInput initialKeyword={keyword} initialRating={rating} initialLang={lang}/>

			<h2 className="container--title">{ decodeURI(keyword) }</h2>
			<button type="button" className={gifs.length >= 30 ? "upBtn upVisible" : "upBtn upInvisible"} onClick={handleUp}>
				<img src="https://img.icons8.com/material-rounded/256/chevron.png" alt="Arrow up" width="40" height="40"/>
			</button>

			<div>
				<CardsList gifs={gifs} loading={loading}/>
				<div id="watcher" ref={externalRef}></div>
			</div>
			
		</section>
		
	);
};

export default SearchResults;