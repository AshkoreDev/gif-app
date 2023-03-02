import React from 'react';
import { Route, Link } from 'wouter';

import logo from './logo.png';

import Home from './pages/Home.jsx';
import SearchResults from './pages/SearchResults.jsx';


function App() {

  return (

    <>
      <section className="app__content">
      	
      	<Link to="/" className="logo">
      		<img src={logo} alt="Gif Logo" width="100"/>
          <h2>GIF APP</h2>
      	</Link>

      	<Route path="/" component={Home} />
      	<Route path="/search/:keyword" component={SearchResults} />
      	
      </section>

    </>

  );
};

export default App;