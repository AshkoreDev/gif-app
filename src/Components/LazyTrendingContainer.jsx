import React, { Suspense } from 'react';
import Spinner from './Spinner.jsx';
import { useNearScreen } from './../Hooks/useNearScreen';

const TrendingContainer = React.lazy(() => import('./TrendingContainer.jsx'));

function LazyTrendingContainer({fun, title}) {
	
	const { isNearScreen, fromRef } = useNearScreen();

	return <Suspense fallback={<Spinner />}>
		<div ref={fromRef}> 
			{ 
				isNearScreen 
					? <TrendingContainer fun={fun} title={title} /> 
					: <Spinner /> 
			} 
		</div>
	</Suspense>
};

export default LazyTrendingContainer;