import React, { Suspense } from 'react';
import Spinner from './Spinner.jsx';
import { useNearScreen } from './../Hooks/useNearScreen';

const SearchList = React.lazy(() => import('./SearchList.jsx'));

function LazySearchList() {
	
	const { isNearScreen, fromRef } = useNearScreen({ distance: '1px' });

	return <Suspense fallback={<Spinner />}>
		<div ref={fromRef}> 
			{ isNearScreen ? <SearchList /> : <Spinner /> } 
		</div>
	</Suspense>
};

export default LazySearchList;