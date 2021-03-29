import React, { useState } from 'react'
import './ClubCardSimple.css'
import logo from '../assets/default_logo.jpg'
import banner from '../assets/default_banner.jpg'
import { Link } from 'react-router-dom'

const ClubCard = ({club}) => {

  const [lines, setLines] = useState('simple-one-line');
  
  const measuredRef = (node) => {
    if (node !== null) {
      const height = node.getBoundingClientRect().height
      const lines = height <= 16 ? 'simple-one-line' : height <= 32 ? 'simple-two-line' : height <= 48 ? 'simple-three-line' : height <= 64 ? 'simple-four-line' : 'simple-five-line'
      setLines(lines);
    }
  };

  var {link_name, name, logo_url, about_us } = club;
  about_us = about_us.length > 0 ? about_us : 'No description provided.';

  return (
    <div>
      <Link to={`/club/${link_name}`}>
        <div className="clubcardsimple-content">
          <div className="clubcard-content-row1">
            <img src={logo_url || logo} alt="logo" className='clubcardsimple-logo'/>
            <div className='clubcardsimple-text'>
              <div className="clubcard-title" ref={measuredRef}>{name}</div>
              <div className={lines + ' clubcardsimple-description'}>{about_us.replace(/(<([^>]+)>)/gi, "").replace('&nbsp;', ' ')}</div>
            </div>
          </div>
          </div>
      </Link>
    </div>
  )
}

export default ClubCard;
