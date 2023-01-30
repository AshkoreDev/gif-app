import React from 'react';

const Card = ({id, title, url}) => {

  return (

    <article className="card">
      <img src={url} alt={title} width="200" height="150" loading="lazy"/>
    </article>

  );
};

export default Card;