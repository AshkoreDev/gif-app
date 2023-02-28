import React from 'react';
import CardsList from './../components/CardsList.jsx';
import { useGifs } from './../hooks/useGifs.jsx';

import Spinner from './../components/Spinner';

const SearchResults = ({ params }) => {
	
	const { keyword } = params;
	const { loading, gifs } = useGifs({ keyword });

	return (

		<section className="container">
			<h2 className="container--title">{ decodeURI(keyword) }</h2>
			{ loading
					? <Spinner/>
					: <CardsList gifs={gifs} />
			}
		</section>
		
	);
};

export default SearchResults;