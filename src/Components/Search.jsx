import React from 'react';

const Search = ({setKeyword, title}) => {

  return (

    <form className="search__form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">{title}</label>
      <input type="text" id="search" autoFocus autoComplete="off" placeholder="Buscar..." onChange={(e) => setKeyword(e.target.value)}/>
    </form>

  );
};

export default Search;