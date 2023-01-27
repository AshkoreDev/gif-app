import React from 'react';
import { Link, Route } from 'wouter';
import Home from './Pages/Home.jsx';

function App() {

  return (

    <div>
      <Link to="/gifs" element={<Home />}>Gifs</Link>
      <Route component={Home} path="/gifs"/>
    </div>
  );
};

export default App;