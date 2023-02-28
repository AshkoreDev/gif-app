import React from 'react';
import { Route, Link } from 'wouter';

import logo from './logo.png';

import Home from './pages/Home.jsx';
import SearchResults from './pages/SearchResults.jsx';


function App() {

  return (

    <>
      <section className="app__content">
      	
      	<Link to="/">
      		<img src={logo} className="logo" alt="Gif Logo"/>
      	</Link>
        <h1>GIF APP</h1>

      	<Route path="/" component={Home} />
      	<Route path="/search/:keyword" component={SearchResults} />
      	
      </section>

    </>

  );
};

export default App;