import React, { useEffect, useState } from 'react';
import { useData } from './../Hooks/useData';
import { useNearScreen } from './../Hooks/useNearScreen';
import getTrendingSearch from './../Data/getTrendingSearch.jsx';

const SearchList = () => {

	const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    getTrendingSearch()
      .then(item => {
        setData(item);
        setLoading(false);
      })
  }, []);

	console.log(data)

	return (

	 <div className="searchList">
	 <h2>Lo más buscado</h2>
	 	<div className="searchList__container">
	 		{
      	data.map((name, id) => <a key={id} href="#!">{name}</a>)
	 		}
	 	</div>
	 </div>

	);
};

function LazySearchList() {
	
	const { isNearScreen, fromRef } = useNearScreen();

	return <div ref={fromRef}> 
		{ isNearScreen ? <SearchList /> : null } 
	</div>
}

export default LazySearchList;