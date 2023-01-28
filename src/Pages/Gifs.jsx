import React, { useEffect, useState } from 'react';
import GifList from './../Components/GifList.jsx';
import Search from './../Components/Search.jsx';
import getGifs from './../Data/getGifs.jsx';

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
      <Search setKeyword={setKeyword} />
      { loading ? <h2>Cargando...</h2> : <GifList gifs={gifs} /> }
    </section>

  );
};

export default Gifs;