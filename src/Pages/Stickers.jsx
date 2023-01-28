import React, { useEffect, useState } from 'react';
import getStickers from './../Data/getStickers.jsx';

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
        console.log(stickers)
      })
  }, [keyword]);

  return (
    <div>Stickers</div>
  );
};

export default Stickers;