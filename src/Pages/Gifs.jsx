import React, { useEffect, useState } from 'react';
import getGifs from './../Data/getGifs.jsx';
import Search from './../Components/Search.jsx';
import CardsList from './../Components/CardsList.jsx';


const Gifs = () => {

  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
      })
  }, [keyword]);

  return (

    <section className="container">
      <Search setKeyword={setKeyword} title="Buscar Gifs"/>
      { loading ? <h2>Cargando...</h2> : <CardsList item={gifs} /> }
    </section>

  );
};

export default Gifs;