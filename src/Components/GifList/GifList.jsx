import React from 'react';
import Gif from './../Gif/Gif.jsx';

const GifList = ({gifs}) => {

  return (

    <section className="list__container">
      {
        gifs.map(({id, title, url}) => <Gif Key={id} title={title} url={url} />)
      }
    </section>

  );
};

export default GifList;