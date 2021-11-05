import React, { useState, useEffect } from 'react';

import changeSearch from './../../../pages/catalog/Catalog.js'

// import GridComponent from './../../../components/layout/grid/GridComponent.js';
// import { connect } from 'react-redux';

            // {/* Search Bar */}
            // <div className="filter search-filter">
            //   <i className="fas fa-search"></i>
            //   <input
            //     type="text"
            //     placeholder="Search"
            //     value={name}
            //     onChange={(e) => changeSearch(e)}
            //     className="search-input"
            //   />
            //   <span className="reset-filters" onClick={() => resetFilters()}>
            //     reset filters
            //   </span>
            // </div>

const Searchbar = ({onClick, value}) => {
	return (
    <div className="filter search-filter">
      <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => changeSearch(e)}
          className="search-input"
        />
        <span className="reset-filters" onClick={onClick}>
            reset filters
        </span>
    </div>
  );
};


export default Searchbar

