import React from 'react';

const Card = ({title, url}) => {

  return (

    <article className="card">
      <img src={url} alt={title} width="200" height="150"/>
    </article>

  );
};

export default Card;