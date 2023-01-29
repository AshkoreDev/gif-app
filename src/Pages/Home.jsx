import React, { useState } from 'react';
import Search from './../Components/Search.jsx';
import CardsList from './../Components/CardsList.jsx';
import { useData } from './../Hooks/useData';
import getTrendingGifs from './../Data/getTrendingGifs.jsx';

const Gifs = () => {
 
  const [keyword, setKeyword] = useState('');
  const { loading, data } = useData(getTrendingGifs, keyword);

  return (

    <section className="container">
      <h2>Trending Gifs</h2>
      { loading ? <h2 className="loading">Cargando...</h2> : <CardsList data={data} /> }
    </section>

  );
};

export default Gifs;