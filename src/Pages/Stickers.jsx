import React, { useEffect, useState } from 'react';
import getStickers from './../Data/getStickers.jsx';
import Search from './../Components/Search.jsx';
import CardsList from './../Components/CardsList.jsx';


const Stickers = () => {

  const [stickers, setStickers] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    getStickers({ keyword })
      .then(stickers => {
        setStickers(stickers);
        setLoading(false);
      })
  }, [keyword]);

  return (

    <section className="container">
      <Search setKeyword={setKeyword} title="Buscar Stickers"/>
      { loading ? <h2>Cargando...</h2> : <CardsList item={stickers} /> }
    </section>

  );
};

export default Stickers;