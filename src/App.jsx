import React, { useEffect, useState } from 'react';
import GifList from './Components/GifList/GifList.jsx';
import Search from './Components/Search/Search.jsx';
import getData from './Data/getData.jsx';

function App() {

  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {

    getData({ keyword })
      .then(gifs => setGifs(gifs))

  }, [keyword]);

  return (

    <section>
      <Search setKeyword={setKeyword} />
      <GifList gifs={gifs} />
    </section>

  );
};

export default App;