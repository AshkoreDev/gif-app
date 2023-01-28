import React from 'react';
import { Link } from 'wouter';
import logo from './../logo.png';
import Gifs from './../Pages/Gifs.jsx';
import Stickers from './../Pages/Stickers.jsx';

const Navigation = () => {

  return (

    <nav>
      <Link to="/gif-app/" component={<Gifs />}>
        <img src={logo} alt="" width="40" height="40" />
        <p>Gify-App</p>
      </Link>
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