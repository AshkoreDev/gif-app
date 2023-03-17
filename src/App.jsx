import React from 'react';
import { Route, Link, Switch  } from 'wouter';

import logo from './logo.png';

import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import SearchResults from './pages/SearchResults.jsx';


function App() {

  return (

    <>
      <section className="app__content">
      	
          <Link to="/gif-app/" className="logo">
            <img src={logo} alt="Gif Logo" width="60" height="60"/>
            <h2>GIF APP</h2>
          </Link>
          
          <Switch>
            <Route path="/gif-app/" component={Home}/>
            <Route path="/gif-app/search/:keyword/:rating?/:lang?" component={SearchResults}/>
            <Route path="/gif-app/:rest*" component={ErrorPage}/>
          </Switch>
      </section>
    </>

  );
};

export default App;