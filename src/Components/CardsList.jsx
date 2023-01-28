import React from 'react';
import Card from './Card.jsx';

const CardsList = ({item}) => {

  return (

    <section className="list__container">
      {
        item.map(({id, title, url}) => <Card Key={id} title={title} url={url} />)
      }
    </section>

  );
};

export default CardsList;