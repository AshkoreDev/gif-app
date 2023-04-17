import { useState, useEffect } from 'react';
import Category from './Category.jsx';
import { getTrendingSearches } from './../services/getTrendingSearches.js';

function TrendingSearches() {
	
	const [trends, setTrends] = useState([]);

	useEffect(() => {

		getTrendingSearches()
			.then(setTrends);

	}, []);


	return <Category trends={trends}/>
};

export default TrendingSearches;