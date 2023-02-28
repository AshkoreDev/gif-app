import React from 'react';
import { Route, Link } from 'wouter';

import logo from './logo.png';

import CardsList from './components/CardsList.jsx';
import Home from './pages/Home.jsx';


function App() {

  return (

    <>
      <section className="app-content">
      	
      	<Link to="/">
      		<img src={logo} className="logo" alt="Gif Logo"/>
      	</Link>
        <h1>GIF APP</h1>

      	<Route path="/" component={Home} />
      	<Route path="/search/:keyword" component={CardsList} />
      	
      </section>

    </>

  );
};

export default App;