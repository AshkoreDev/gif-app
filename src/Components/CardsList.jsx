import React from 'react';
import Card from './Card.jsx';

const CardsList = ({data}) => {

  return (

    <section className="list">
      {
        data.map(({id, title, url}) => <Card Key={id} title={title} url={url} />)
      }
    </section>

  );
};

export default CardsList;