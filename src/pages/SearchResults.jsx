import React, { useRef, useEffect, useCallback } from 'react';
import debounce from 'just-debounce-it';
import Spinner from './../components/Spinner';
import CardsList from './../components/CardsList.jsx';
import { useGifs } from './../hooks/useGifs.jsx';
import { useNearScreen } from './../hooks/useNearScreen.jsx';

const SearchResults = ({ params }) => {
	
	const { keyword } = params;
	const { loading, loadingNextPage, gifs, setPage } = useGifs({ keyword });
	const externalRef = useRef();
	const { isNearScreen } = useNearScreen({ externalRef : loading ? null : externalRef, once: false });

	const debounceHandleNextPage = useCallback(debounce(() => setPage(prevPage => prevPage + 1), 200), [setPage]);

	useEffect(() => {

		if(isNearScreen) {

			debounceHandleNextPage();
		}

	}, [isNearScreen, debounceHandleNextPage]);

	return (

		<section className="container">
			<h2 className="container--title">{ decodeURI(keyword) }</h2>
			{ loading
					? <Spinner/>
					: <>
							<CardsList gifs={gifs} />
							<div id="watcher" ref={externalRef}></div>
						</>
			}
		</section>
		
	);
};

export default SearchResults;