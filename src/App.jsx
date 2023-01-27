import React, { useEffect, useState } from 'react';
import GifList from './Components/GifList.jsx';
import Search from './Components/Search.jsx';
import getData from './Data/getData.jsx';

function App() {

  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {

    getData({ keyword })
      .then(gifs => setGifs(gifs))

  }, [keyword]);

  return (

    <section className="container">
      <Search setKeyword={setKeyword} />
      <GifList gifs={gifs} />
    </section>

  );
};

export default App;