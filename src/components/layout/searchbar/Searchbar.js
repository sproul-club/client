import React, { useState, useEffect } from 'react';
import '../../../pages/catalog/Catalog.scss';

const Searchbar = ({click, value, searchClubs}) => {
	return (
    <div className="filter search-filter">
      <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => searchClubs(e)}
          className="search-input"
        />
        <span className="reset-filters" onClick={() => click()}>
            reset filters
        </span>
    </div>
  );
};

export default Searchbar

