import React from 'react';

function Card({ id, title, url }) {
	
  return (

    <article className="card">
      <img src={url} alt={title} width="200" height="150" loading="lazy"/>
    </article>

  );
};

export default React.memo(Card, (prevProps, nextProps) => prevProps.id === nextProps.id);