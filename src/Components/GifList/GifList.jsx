import React from 'react';
import Gif from './../Gif/Gif.jsx';

const GifList = ({gifs}) => {

  return (

    gifs.map(({id, title, url}) => {

      return (

        <Gif
        key={id}
        title={title}
        url={url} />

      )
    })

  );
};

export default GifList;