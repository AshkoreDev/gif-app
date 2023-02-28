import React from 'react';
import Spinner from './Spinner.jsx';
import TrendingSearches from './TrendingSearches';
import { useNearScreen } from './../hooks/useNearScreen.jsx';

const LazyTrendingSearches = () => {
	
	const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' });

	return (

		<section ref={fromRef}>
			{
				isNearScreen
					? <TrendingSearches/>
					: <Spinner/>
			}
		</section>
	);
};

export default LazyTrendingSearches;