import React, { useState } from 'react';
import Search from './../Components/Search.jsx';
import Spinner from './../Components/Spinner.jsx';
import CardsList from './../Components/CardsList.jsx';
import getTrendingGifs from './../Data/getTrendingGifs.jsx';
import { useData } from './../Hooks/useData';

const Home = () => {
 
  // const [keyword, setKeyword] = useState('');
  const { loading, data } = useData(getTrendingGifs);

  return (

    <section className="container">
      <h2>Trending Gifs</h2>
      { loading ? <Spinner /> : <CardsList data={data} /> }
    </section>

  );
};

export default Home;

// https://uiball.com/loaders/