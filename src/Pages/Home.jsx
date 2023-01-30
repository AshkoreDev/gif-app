import React from 'react';
import getTrendingGifs from './../Data/getTrendingGifs.jsx';
import getTrendingStickers from './../Data/getTrendingStickers.jsx';
import TrendingContainer from './../Components/TrendingContainer.jsx';

import SearchList from './../Components/SearchList.jsx';

const Home = () => {

  return (

    <>
    	<TrendingContainer fun={getTrendingGifs} title="Trending Gifs" />
    	<TrendingContainer fun={getTrendingStickers} title="Trending Stickers" />
    	<SearchList />
    </>

  );
};

export default Home;

// https://uiball.com/loaders/