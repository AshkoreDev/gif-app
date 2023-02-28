import React from 'react';
import CardsList from './../components/CardsList.jsx';
import { useGifs } from './../hooks/useGifs.jsx';

const SearchResults = ({ params }) => {
	
	const { keyword } = params;
	const { loading, gifs } = useGifs({ keyword });

	return (

		<>
			{ loading
					? 'cargando'
					: <CardsList gifs={gifs} />
			}
		</>
		
	);
};

export default SearchResults;