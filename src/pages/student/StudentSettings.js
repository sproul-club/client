import React, {useState} from 'react'
import { connect } from 'react-redux'
import {StudentSettingStyles} from './Student.styles'

const StudentSettings = ({tagOptions}) => {

  const yearOptions = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Fifth Year', 'Other']
  const majorsOptions = ['Business', 'Computer Science', 'History', 'Bird Watching']
  const minorOptions = ['Business', 'Computer Science', 'History', 'Bird Watching']
  
  const [showYearDD, setShowYearDD] = useState(false)
  const [showMajorDD, setShowMajorDD] = useState(false)
  const [showMinorDD, setShowMinorDD] = useState(false)
  const [showInterestDD, setShowInterestDD] = useState(false)

  const [year, setYear] = useState('')
  const [majors, setMajors] = useState([])
  const [minors, setMinors] = useState([])
  const [interests, setInterests] = useState([])

  const selectYear = (e) => {
    setYear(e.target.getAttribute('value'))
    setShowYearDD(false)
  }

  const selectMajor = (e) => {
    const newMajor = e.target.getAttribute('value')

    if (majors.includes(newMajor)){
      const majorIndex = minors.indexOf(newMajor)
      var newMajors = [...majors]
      newMajors.splice(majorIndex, 1)
    } else {
      if (majors.length >= 3) return
      var newMajors = [...majors, newMajor]
    }
    
    setMajors(newMajors)
    setShowMajorDD(false)
  }

  const selectMinor = (e) => {
    const newMinor = e.target.getAttribute('value')

    if (minors.includes(newMinor)){
      const minorIndex = minors.indexOf(newMinor)
      var newMinors = [...minors]
      newMinors.splice(minorIndex, 1)
    } else {
      if (minors.length >= 3) return
      var newMinors = [...minors, newMinor]
    }

    setMinors(newMinors)
    setShowMinorDD(false)
  }

  const selectInterest = (e) => {
    const newInterest = e.target.getAttribute('value')

    if (interests.includes(newInterest)){
      var newInterests = [...interests]
      newInterests.splice(0, 1)
    } else {
      if (interests.length >= 10) return
      var newInterests = [...interests, newInterest]
    }

    setInterests(newInterests)
    setShowInterestDD(false)
  }

  return (
    <StudentSettingStyles year={showYearDD} major={showMajorDD} minor={showMinorDD} interests={showInterestDD}>
      <div className="settings-wrapper">
        
          <div className="label">Name</div>
          <input className="names-input" placeholder="First Last"/>
          
          <div className="label">Email</div>
          <div className="email">name@berkeley.edu</div>
          
          <div className='label'>Preferences</div>

          <div className='settings-selection' >
            <div onClick={() => setShowYearDD(!showYearDD)} className='selection-input year'>
              {year ? year : <div className='placeholder'>Select Year</div>}
              {showYearDD ? <i className='fas fa-caret-up'></i> : <i className='fas fa-caret-down'></i>}
            </div>
            {showYearDD && (
              <div className="selection-dropdown scrollable-content">
                {yearOptions.map((yearOption, i) => (
                  <div className='dropdown-option' value={yearOption} key={i} onClick={selectYear}>{yearOption}</div>
                ))}
              </div>
            )}
          </div>

          <div className='settings-selection' >
            <div onClick={() => setShowMajorDD(!showMajorDD)} className='selection-input major'>
              {majors.length > 0 ? majors.join(', ') : <div className='placeholder'>Major(s)</div>}
              {showMajorDD ? <i className='fas fa-caret-up'></i> : <i className='fas fa-caret-down'></i>}
            </div>
            {showMajorDD && (
              <div className="selection-dropdown scrollable-content">
                {majorsOptions.map((majorOption, i) => (
                  <div className='dropdown-option' value={majorOption} key={i} onClick={selectMajor}>
                    <input type="checkbox" checked={majors.includes(majorOption)}/> 
                    {majorOption}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='settings-selection' >
            <div onClick={() => setShowMinorDD(!showMinorDD)} className='selection-input minor'>
              {minors.length > 0 ? minors.join(', ') : <div className='placeholder'>Minor(s)</div>}
              {showMinorDD ? <i className='fas fa-caret-up'></i> : <i className='fas fa-caret-down'></i>}
            </div>
            {showMinorDD && (
              <div className="selection-dropdown scrollable-content">
                {minorOptions.map((minorOption, i) => (
                  <div className='dropdown-option' value={minorOption} key={i} onClick={selectMinor}>
                    <input type="checkbox" checked={minors.includes(minorOption)}/> 
                    {minorOption}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='settings-selection' >
            <div onClick={() => setShowInterestDD(!showInterestDD)} className='selection-input interests'>
              <div className='placeholder'>Interests</div>
              {showInterestDD ? <i className='fas fa-caret-up'></i> : <i className='fas fa-caret-down'></i>}
            </div>
            {showInterestDD && (
              <div className="selection-dropdown scrollable-content">
                {tagOptions.map((tag, i) => (
                  <div className='dropdown-option' value={tag.label} key={i} onClick={selectInterest}>
                    <input type="checkbox" checked={interests.includes(tag.label)}/> {tag.label}
                  </div>
                ))}
              </div>
            )}
            <div className='selections'>
              {interests.map(interest => <div className='selection'>{interest}</div>)}
            </div>
          </div>

          <div className='save-button'>Save</div>

      </div>
    </StudentSettingStyles>
  )
}

const mapStateToProps = (state) => ({
  tagOptions: state.profile.tagOptions
})

export default connect(mapStateToProps, {})(StudentSettings)
