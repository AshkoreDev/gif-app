import React, { useState } from 'react';
import Search from './../Components/Search.jsx';
import Spinner from './../Components/Spinner.jsx';
import CardsList from './../Components/CardsList.jsx';
import getGifs from './../Data/getGifs.jsx';
import { useData } from './../Hooks/useData';

const Gifs = () => {
 
  const [keyword, setKeyword] = useState('');
  const { loading, data, setPage } = useData(getGifs, keyword);

  const handleNextPage = () => setPage(prevPage => prevPage + 1);

  return (

    <section className="container">
      <Search setKeyword={setKeyword} title="Buscar Gifs"/>
      { loading ? <Spinner /> : <CardsList data={data} /> }
      <button onClick={handleNextPage}>Next</button>
    </section>

  );
};

export default Gifs;