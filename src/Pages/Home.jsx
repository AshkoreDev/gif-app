import React from 'react';
import getTrendingGifs from './../Data/getTrendingGifs.jsx';
import getTrendingStickers from './../Data/getTrendingStickers.jsx';

import LazySearchList from './../Components/LazySearchList.jsx';
import TrendingContainer from './../Components/TrendingContainer.jsx';
import LazyTrendingContainer from './../Components/LazyTrendingContainer.jsx';


const Home = () => {

  return (

    <>
    	<TrendingContainer fun={getTrendingGifs} title="Trending Gifs" />
    	<LazyTrendingContainer fun={getTrendingStickers} title="Trending Stickers" />
    	
    </>

  );
};

export default Home;

// https://uiball.com/loaders/
//<LazySearchList />
//