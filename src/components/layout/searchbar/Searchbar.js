import React, { useState, useEffect } from 'react';
import '../searchbar/Searchbar.scss';

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
        {showReset && <span className="reset-filters" onClick={() => click()}>
            reset filters
        </span>}
    </div>
  );
};

export default Searchbar