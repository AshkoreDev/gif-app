import React from 'react';

const Search = ({setKeyword, title}) => {

  return (

    <form className="search__form">
      <label htmlFor="search">{title}</label>
      <input type="text" id="search" placeholder="Buscar..." onChange={(e) => setKeyword(e.target.value)}/>
    </form>

  );
};

export default Search;