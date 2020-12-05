import React, { useState } from 'react'
import './Catalog2.css'
import banner from './assets/catalog_banner.jpg'
import GridComponent from './GridComponent'
import ClubCard from './ClubCard'

const Catalog2 = () => {
  const [showStatusDD, setShowStatusDD] = useState(true)

  console.log(showStatusDD)

  return (
    <div className='catalog-page'>
      <div className="catalog-content">
        <div className="banner"><img src={banner} alt="banner"/></div>
        <div className='filters'>
          <div className="filter search-filter">
            <i class="fas fa-search"></i>
            <input type="text" placeholder='Search' className='search-input'/>
          </div>
          <div>

          <div className='filter-wrapper'>
            <div onClick={() => setShowStatusDD(!showStatusDD)} className={`${showStatusDD && 'openDD'} filter status-filter`}>
              Status
              {showStatusDD ? <i className='fas fa-caret-down'></i> : <i className='fas fa-caret-up'></i>}
            </div>
            {showStatusDD && (
              <div className="filter-dropdown">
                <div className='filter-selection'>
                  <input type="checkbox"/> Taking members
                </div>
                <div className='filter-selection'>
                  <input type="checkbox"/> Not taking members
                </div>
              </div>
            )}
          </div>
          </div>
          <div className="filter app-filter">
            App
            <i className='fas fa-caret-down'></i>
          </div>
          <div className="filter tags-filter">
            Tags
            <i className='fas fa-caret-down'></i>
          </div>
          <div className="filter members-filter">
            Members
            <i className='fas fa-caret-down'></i>
          </div>
          <div className="filter sort-filter">
            Sort
            <i className='fas fa-caret-down'></i>
          </div>
        </div>
        <div className="results-content">
          <GridComponent/>
        </div>
      </div>
    </div>
  )
}

export default Catalog2

