import React, { useState } from 'react';
import Search from './../Components/Search.jsx';
import Spinner from './../Components/Spinner.jsx';
import CardsList from './../Components/CardsList.jsx';
import getStickers from './../Data/getStickers.jsx';
import { useData } from './../Hooks/useData';

const Stickers = () => {

  const [keyword, setKeyword] = useState('');
  const { loading, data, setPage } = useData(getStickers, keyword);

  const handleNextPage = () => setPage(prevPage => prevPage + 1);

  return (

    <section className="container">
      <Search setKeyword={setKeyword} title="Buscar Stickers"/>
      { loading ? <Spinner /> : <CardsList data={data} /> }
      <button onClick={handleNextPage}>Next</button>
    </section>

  );
};

export default Stickers;