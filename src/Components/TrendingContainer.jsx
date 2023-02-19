import React from 'react';
import { useData } from './../Hooks/useData';
import { useNearScreen } from './../Hooks/useNearScreen';
import Spinner from './../Components/Spinner.jsx';
import CardsList from './../Components/CardsList.jsx';

export const TrendingContainer = ({fun, title}) => {

	const { loading, data } = useData(fun);

  return (

    <section className="container">
      <h2>{title}</h2>
      { loading ? <Spinner /> : <CardsList data={data} /> }
    </section>

  );
};


export function LazyTrendingContainer({fun, title}) {
	
	const { isNearScreen, fromRef } = useNearScreen();

	return <div ref={fromRef}> 
		{ isNearScreen ? <TrendingContainer fun={fun} title={title} /> : null } 
	</div>
};