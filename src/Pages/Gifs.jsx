import React, { useState, useEffect, useRef, useCallback } from 'react';
import debounce from 'just-debounce-it';
import Search from './../Components/Search.jsx';
import Spinner from './../Components/Spinner.jsx';
import CardsList from './../Components/CardsList.jsx';
import getGifs from './../Data/getGifs.jsx';
import { useData } from './../Hooks/useData';
import { useNearScreen } from './../Hooks/useNearScreen';

const Gifs = () => {
 
  const [keyword, setKeyword] = useState('');
  const externalRef = useRef();
  const { loading, data, setPage } = useData(getGifs, keyword);
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false });
  
  const debounceHandlerNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 100
  ), [setPage]);

  useEffect(() => {

    if(isNearScreen) debounceHandlerNextPage();

  }, [debounceHandlerNextPage, isNearScreen]);

  return (

    <section className="container">
      <Search setKeyword={setKeyword} title="Buscar Gifs"/>
      { 
        loading 
          ? <Spinner /> 
          : <>
              <CardsList data={data} /> 
              <div id="watcher" ref={externalRef}></div>
            </>
      }
      
    </section>

  );
};

export default Gifs;