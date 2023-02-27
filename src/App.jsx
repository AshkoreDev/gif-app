import React from 'react';
import { Route } from 'wouter';

import logo from './logo.png';

import CardsList from './components/CardsList.jsx';


function App() {

  return (

    <>
      <section className="app-content">
      
      	<Route path="/gif/:keyword" component={CardsList} />
      	
      </section>

    </>

  );
};

export default App;