import React from 'react';

const Search = ({setKeyword}) => {

  return (

    <form>
      <input type="text" placeholder="Buscar..." onChange={(e) => setKeyword(e.target.value)}/>
    </form>

  );
};

export default Search;