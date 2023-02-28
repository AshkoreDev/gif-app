import React, { useState, useEffect } from 'react';
import Category from './Category.jsx';
import getTrendingSearches from './../services/getTrendingSearches.jsx';

const TrendingSearches = () => {
	
	const [trends, setTrends] = useState([]);

	useEffect(() => {

		getTrendingSearches()
			.then(setTrends);

	}, []);


	return <Category trends={trends} />
};

export default TrendingSearches;