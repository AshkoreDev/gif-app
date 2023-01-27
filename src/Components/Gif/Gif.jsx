import React from 'react';

const Gif = ({title, url}) => {

  return (

    <article>
      <img src={url} alt={title} width="250" height="150"/>
      <h2>{title}</h2>
    </article>

  );
};

export default Gif;