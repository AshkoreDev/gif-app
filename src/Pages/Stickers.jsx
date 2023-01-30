import React, { useState } from 'react';
import Search from './../Components/Search.jsx';
import Spinner from './../Components/Spinner.jsx';
import CardsList from './../Components/CardsList.jsx';
import getStickers from './../Data/getStickers.jsx';
import { useData } from './../Hooks/useData';

const Stickers = () => {

  const [keyword, setKeyword] = useState('');
  const { loading, data } = useData(getStickers, keyword);

  return (

    <section className="container">
      <Search setKeyword={setKeyword} title="Buscar Stickers"/>
      { loading ? <Spinner /> : <CardsList data={data} /> }
    </section>

  );
};

export default Stickers;