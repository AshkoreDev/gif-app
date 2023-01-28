import React from 'react';
import { Route } from 'wouter';
import Gifs from './Pages/Gifs.jsx';
import Stickers from './Pages/Stickers.jsx';
import Navigation from './Components/Navigation.jsx';

function App() {

  return (

    <>
      <Navigation />
      <Route path="/gif-app/" component={Gifs}/>
      <Route path="/gifs" component={Gifs}/>
      <Route path="/stickers" component={Stickers}/>
    </>

  );
};

export default App;