import React, { useEffect, useState } from 'react';

const INITIAL_PAGE = 0;

export function useData(fun, keyword='') {
  
  const [data, setData] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    fun({ keyword })
      .then(item => {
        setData(item);
        setLoading(false);
      })
  }, [keyword]);

  useEffect(() => {

    if(page === INITIAL_PAGE) return;

    fun({ keyword, page })
      .then(nextData => {
        setData(prevData => prevData.concat(nextData))
      })

  }, [keyword, page, setData]);

  return { loading, data, setPage };
}