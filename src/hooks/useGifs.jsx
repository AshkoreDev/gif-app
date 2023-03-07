import { useState, useEffect } from 'react';
import getGifs from './../services/getGifs.jsx';

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null }) {
	
	const [loading, setLoading] = useState(false);
	const [gifs, setGifs] = useState([]);
	const [page, setPage] = useState(INITIAL_PAGE);

	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

	useEffect(() => {

		setLoading(true);

		getGifs({ keyword: keywordToUse, rating })
			.then(gifs => {

				setGifs(gifs);
				setLoading(false);
				localStorage.setItem('lastKeyword', keyword);
			});

	}, [keyword, keywordToUse, setGifs, rating]);


	useEffect(() => {

		if(page === INITIAL_PAGE ) return;

		getGifs({ keyword: keywordToUse, page, rating })
			.then(nextGifs => { 

				setGifs(prevGifs => prevGifs.concat(nextGifs));
			});

	}, [page, keywordToUse, setGifs]);

	return { loading, gifs, setPage };
};