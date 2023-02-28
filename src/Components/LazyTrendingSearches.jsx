import React, { useState, useEffect } from 'react';
import TrendingSearches from './TrendingSearches';

const LazyTrendingSearches = () => {

	const [show, setShow] = useState(false);

	useEffect(() => {

		const onChange = (entries) => {

			const element = entries[0];
		}	


		const observer = new IntersectionObserver(onChange, {
			rootMargin: '100px'
		});

		observer.observe(element);
	});

	return (

		<>
			{
				show
					? <TrendingSearches/>
					: null
			}
		</>
	);
};

export default LazyTrendingSearches;