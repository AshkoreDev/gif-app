import React, { useEffect, useState } from 'react';
import Search from './../Components/Search.jsx';
import CardsList from './../Components/CardsList.jsx';
import { useData } from './../Hooks/useData';
import getGifs from './../Data/getGifs.jsx';

const Gifs = () => {
 
  const [keyword, setKeyword] = useState('');
  const { loading, data } = useData(getGifs, keyword);

  return (

    <section className="container">
      <Search setKeyword={setKeyword} title="Buscar Gifs"/>
      { loading ? <h2 className="loading">Cargando...</h2> : <CardsList data={data} /> }
    </section>

  );
};

export default Gifs;