import React from 'react';
import getTrendingGifs from './../Data/getTrendingGifs.jsx';
import getTrendingStickers from './../Data/getTrendingStickers.jsx';
import TrendingContainer from './../Components/TrendingContainer.jsx';

const Home = () => {

  return (

    <>
    	<TrendingContainer fun={getTrendingGifs} title="Trending Gifs" />
    	<TrendingContainer fun={getTrendingStickers} title="Trending Stickers" />
    </>
   
  );
};

export default Home;

// https://uiball.com/loaders/