import React, { useEffect, useState } from 'react';

export function useData(fun, keyword='') {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    fun({ keyword })
      .then(item => {
        setData(item);
        setLoading(false);
      })
  }, [keyword]);

  return { loading, data };
}