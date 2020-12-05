import React from 'react'
import './ClubCard.css'
import logo from './assets/default_logo.jpg'
import banner from './assets/default_banner.jpg'
import { Link } from 'react-router-dom'

const ClubCard = ({club, tagOptions}) => {

  // const {app_required, banner_url, logo_url, name, new_members, tags} = club
  const {link_name, name, banner_url, logo_url, new_members, app_required } = club
  console.log(club)

  return (
    <Link to={`/club/${link_name}`} className='clubcard'>
      <div className="banner-content">
        <img src={banner_url || banner} alt="banner" className="clubcard-banner"/>
        <div className="app-required-tag">
          <span className='appreq-tag'>
          <i className="fas fa-pen"></i>{' '}{app_required ? 'App Required' : 'No App Required'}</span> 
        </div>
      </div>
      <div className="clubcard-content">
        <div className="clubcard-content-row1">
          <img src={logo_url || logo} alt="logo" className='clubcard-logo'/>
          <div className='clubcard-text'>
            <div className="clubcard-title">{name}</div>
            <div className="clubcard-description">We are an interactive platform where students can search for clubs, organizations, and communities relevant to their interests at UC Berkeley.</div>
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
            {/* <div className="clubcard-tag">Business </div>
            <div className="clubcard-tag">Design</div>
            <div className="clubcard-tag">Technology</div> */}
          </div>
          <div className="clubcard-newmembers">
            {new_members ? (
              <>
                <i className="fas fa-check"></i> 
                {' '}Taking members
              </>
            ) : (
              <>
                <i className="fas fa-times"></i> 
                {' '}Not taking members
              </>
            )}
          </div>
        </div>
      

      </div>
    </Link>
  )
}

export default ClubCard
