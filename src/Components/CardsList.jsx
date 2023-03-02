import React from 'react';
import Card from './Card.jsx';
import Spinner from './Spinner';

const CardsList = ({ gifs, loading }) => {
	
  return (

    <section className="list">
      {
      	loading
	      	? <Spinner/>
	        : gifs.map(({ id, title, url }) => <Card Key={id} id={id} title={title} url={url}/>)
      }
    </section>

  );
};

export default CardsList;