import React, { Suspense } from 'react';
import { useNearScreen } from './../Hooks/useNearScreen';

const TrendingContainer = React.lazy(() => import('./TrendingContainer.jsx'));

function LazyTrendingContainer({fun, title}) {
	
	const { isNearScreen, fromRef } = useNearScreen();

	return <Suspense fallback={null}>
		<div ref={fromRef}> 
			{ isNearScreen ? <TrendingContainer fun={fun} title={title} /> : null } 
		</div>
	</Suspense>
};

export default LazyTrendingContainer;