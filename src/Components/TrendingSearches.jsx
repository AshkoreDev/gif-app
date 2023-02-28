import React, { useState, useEffect } from 'react';
import Category from './Category.jsx';
import getTrendingSearches from './../services/getTrendingSearches.jsx';

const TrendingSearches = () => {
	
	const [trends, setTrends] = useState([]);

	useEffect(() => {

		getTrendingSearches()
			.then(setTrends);

	}, []);


	return (

		<section className="trending__list">
			<h2 className="trending--title">Tendencias</h2>
			<Category trends={trends} />
		</section>

	);
};

export default TrendingSearches;