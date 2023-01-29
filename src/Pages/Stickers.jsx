import React, { useState } from 'react';
import Search from './../Components/Search.jsx';
import CardsList from './../Components/CardsList.jsx';
import { useData } from './../Hooks/useData';
import getStickers from './../Data/getStickers.jsx';

const Stickers = () => {

  const [keyword, setKeyword] = useState('');
  const { loading, data } = useData(getStickers, keyword);

  return (

    <section className="container">
      <Search setKeyword={setKeyword} title="Buscar Stickers"/>
      { loading ? <h2 className="loading">Cargando...</h2> : <CardsList data={data} /> }
    </section>

  );
};

export default Stickers;