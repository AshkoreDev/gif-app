import React, { useRef, useEffect, useCallback } from 'react';
import debounce from 'just-debounce-it';
import Spinner from './../components/Spinner';
import CardsList from './../components/CardsList.jsx';

import { useGifs } from './../hooks/useGifs.jsx';
import { useSEO } from './../hooks/useSEO.jsx';
import { useNearScreen } from './../hooks/useNearScreen.jsx';

const SearchResults = ({ params }) => {
	
	const { keyword } = params;
	const { loading, gifs, setPage } = useGifs({ keyword });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({ externalRef : loading ? null : externalRef, once: false });

	const title = gifs ? `${keyword} resultados` : '';
	const description = `Resultados de la búsqueda de ${keyword}`;
	useSEO({ title, description });

	const debounceHandleNextPage = useCallback(debounce(() => setPage(prevPage => prevPage + 1), 200), [setPage]);

	useEffect(() => {

		if(isNearScreen) {

			debounceHandleNextPage();
		}

	}, [isNearScreen, debounceHandleNextPage]);

	return (

		<section className="container">
			<h2 className="container--title">{ decodeURI(keyword) }</h2>
			<div>
				<CardsList gifs={gifs} loading={loading}/>
				<div id="watcher" ref={externalRef}></div>
			</div>
		</section>
		
	);
};

export default SearchResults;