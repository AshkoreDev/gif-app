import React from 'react';
import { Link } from 'wouter';
import Gifs from './../Pages/Gifs.jsx';
import Stickers from './../Pages/Stickers.jsx';

const Navigation = () => {

  return (

    <nav>
      <Link to="/gif-app/" component={<Gifs />}>Gify-App</Link>
      <ul>
        <li>
          <Link to="/gifs" component={<Gifs />}>Gifs</Link>
        </li>
        <li>
          <Link to="/stickers" component={<Stickers />}>Stickers</Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navigation;