import React, { Suspense } from 'react';
import Spinner from './Spinner.jsx';
import { useNearScreen } from './../hooks/useNearScreen.js';

const TrendingSearches = React.lazy(()=> import('./TrendingSearches'));

function LazyTrendingSearches({ loading }) {
	
	const { isNearScreen, fromRef } = useNearScreen();

	return (
		
		<section ref={fromRef} className="trending__list">

				<h2 className="container--title">Tendencias</h2>

				{ loading 
						? <Spinner/>
						: <Suspense fallback={<Spinner/>}>
								{
									isNearScreen
										? <TrendingSearches/>
										: <Spinner/>
								}
							</Suspense>
				}
			
		</section>

	);
};

export default LazyTrendingSearches;