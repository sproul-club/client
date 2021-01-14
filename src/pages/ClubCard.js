import React, { useCallback, useRef, useState } from 'react'
import './ClubCard.css'
import logo from './assets/default_logo.jpg'
import banner from './assets/default_banner.jpg'
import { Link } from 'react-router-dom'

const ClubCard = ({club, tagOptions, displayBanner}) => {

  const [lines, setLines] = useState('one-line');
  
  const measuredRef = (node) => {
    if (node !== null) {
      const height = node.getBoundingClientRect().height
      const lines = height <= 16 ? 'one-line' : height <= 32 ? 'two-line' : 'three-line'
      setLines(lines);
    }
  };

  const {link_name, name, banner_url, logo_url, new_members, app_required, about_us } = club

  return (
    <Link to={`/club/${link_name}`} className='clubcard'>
      {displayBanner &&
        <div className="banner-content">
          <img src={banner_url || banner} alt="banner" className="clubcard-banner"/>
          <div className="app-required-tag">
            <span className={app_required ? 'appreq-tag' : 'noappreq-tag'}>
            <i className="fas fa-pen"></i>{' '}{app_required ? 'App Required' : 'No App Required'}</span> 
          </div>
        </div>
      }
      <div className="clubcard-content">
        <div className="clubcard-content-row1">
          <img src={logo_url || logo} alt="logo" className='clubcard-logo'/>
          <div className='clubcard-text'>
            <div className="clubcard-title" ref={measuredRef}>{name}</div>
            <div className={lines + ' clubcard-description'}>{about_us.replace(/(<([^>]+)>)/gi, "")}</div>
          </div>
          <div className="clubcard-like">
            <i class="fas fa-heart"></i>
            {/* <i class="far fa-heart"></i> */}
          </div>
        </div>
        <div className="clubcard-content-row2">
          <div className='clubcard-tags'>
            {club.tags.map((tag, i) => (
              <div className="clubcard-tag" key={i}>
                {' '}
                {tagOptions.length > 0 && tagOptions[tag].label}{' '}
              </div>
            ))}
          </div>
          <div className="clubcard-newmembers">
            {new_members ? (
              <>
                <i className="fas fa-check"></i> 
                {' '}Open
              </>
            ) : (
              <>
                <i className="fas fa-times"></i> 
                {' '}Closed
              </>
            )}
          </div>
        </div>
      

      </div>
    </Link>
  )
}

export default ClubCard
