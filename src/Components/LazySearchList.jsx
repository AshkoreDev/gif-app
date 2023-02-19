import React, { Suspense } from 'react';
import { useNearScreen } from './../Hooks/useNearScreen';

const SearchList = React.lazy(() => import('./SearchList.jsx'));

function LazySearchList() {
	
	const { isNearScreen, fromRef } = useNearScreen({ distance: '50px' });

	return <Suspense fallback={null}>
		<div ref={fromRef}> 
			{ isNearScreen ? <SearchList /> : null } 
		</div>
	</Suspense>
};

export default LazySearchList;