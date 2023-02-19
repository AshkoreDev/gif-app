import React from 'react';
import getTrendingGifs from './../Data/getTrendingGifs.jsx';
import getTrendingStickers from './../Data/getTrendingStickers.jsx';
import TrendingContainer from './../Components/TrendingContainer.jsx';

import LazySearchList from './../Components/SearchList.jsx';

const Home = () => {

  return (

    <>
    	<TrendingContainer fun={getTrendingGifs} title="Trending Gifs" />
    	<TrendingContainer fun={getTrendingStickers} title="Trending Stickers" />
    	<LazySearchList />
    </>

  );
};

export default Home;

// https://uiball.com/loaders/