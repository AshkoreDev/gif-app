import React, { useState, useEffect } from 'react';

import Card from './Card.jsx';

import getGifs from './../services/getgifs.jsx';


const CardsList = ({ params }) => {

	const { keyword } = params;
	
	const [gifs, setGifs] = useState([]);

	useEffect(() => {

		getGifs({ keyword })
			.then(gifs => setGifs(gifs))

	}, []);

  return (

    <section className="list">
      {
        gifs.map(({ id, title, url }) => <Card Key={id} id={id} title={title} url={url} />)
      }
    </section>

  );
};

export default CardsList;