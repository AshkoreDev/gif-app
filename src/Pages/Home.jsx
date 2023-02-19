import React from 'react';
import getTrendingGifs from './../Data/getTrendingGifs.jsx';
import getTrendingStickers from './../Data/getTrendingStickers.jsx';

import LazySearchList from './../Components/SearchList.jsx';
import { TrendingContainer, LazyTrendingContainer } from './../Components/TrendingContainer.jsx';

const Home = () => {

  return (

    <>
    	<TrendingContainer fun={getTrendingGifs} title="Trending Gifs" />
    	<LazyTrendingContainer fun={getTrendingStickers} title="Trending Stickers" />
    	<LazySearchList />
    </>

  );
};

export default Home;

// https://uiball.com/loaders/