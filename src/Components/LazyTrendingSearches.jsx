import React, { Suspense } from 'react';
import Spinner from './Spinner.jsx';
import { useNearScreen } from './../hooks/useNearScreen.jsx';

const TrendingSearches = React.lazy(()=> import('./TrendingSearches'));

const LazyTrendingSearches = () => {
	
	const { isNearScreen, fromRef } = useNearScreen();

	return (
		
		<section ref={fromRef} className="trending__list">
				<h2 className="trending--title">Tendencias</h2>
				<Suspense fallback={<Spinner/>}>
				{
					isNearScreen
						? <TrendingSearches/>
						: <Spinner/>
				}
			</Suspense>
		</section>

	);
};

export default LazyTrendingSearches;