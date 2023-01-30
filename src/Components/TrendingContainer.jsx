import React from 'react';
import { useData } from './../Hooks/useData';
import Spinner from './../Components/Spinner.jsx';
import CardsList from './../Components/CardsList.jsx';

const TrendingContainer = ({fun, title}) => {

	const { loading, data } = useData(fun);

  return (

    <section className="container">
      <h2>{title}</h2>
      { loading ? <Spinner /> : <CardsList data={data} /> }
    </section>

  );
};

export default TrendingContainer;