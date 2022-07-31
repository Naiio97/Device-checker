import React from 'react';
import '../scss/searchBar.scss';
import { MdSearch } from 'react-icons/md';

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-os">
        <p>Systém</p>
        <input type="text" placeholder="Nezáleží"></input>
      </div>
      <div className="search-producer">
        <p>Výrobce</p>
        <input type="text" placeholder="Nezáleží"></input>
      </div>
      <div className="search-checkbox">
        <input type="checkbox" placeholder="Nezáleží"></input>
        <p>Jen dostupné</p>
      </div>
      <div className="search-model">
        <MdSearch />
        <input type="text" placeholder="Hledat model"></input>
      </div>
    </div>
  );
};

export default SearchBar;