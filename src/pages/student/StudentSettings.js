import React, {useState} from 'react'
import { connect } from 'react-redux'
import {SettingsMultiSelect, SettingsDropdown} from './SettingsDropdowns'
import {StudentSettingStyles} from './Student.styles'

const StudentSettings = ({tagOptions}) => {

  const yearOptions = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Fifth Year', 'Other']
  const majorsOptions = ['Business', 'Computer Science', 'History', 'Bird Watching']
  const minorOptions = ['Business', 'Computer Science', 'History', 'Bird Watching']
  
  const [year, setYear] = useState('')
  const [majors, setMajors] = useState([])
  const [minors, setMinors] = useState([])
  const [interests, setInterests] = useState([])

  return (
    <StudentSettingStyles>
      <div className="settings-wrapper">
        
          <div className="label">Name</div>
          <input className="names-input" placeholder="First Last"/>

          <div className="label">Email</div>
          <div className="email">name@berkeley.edu</div>

          <div className='label'>Preferences</div>
          <SettingsDropdown options={yearOptions} selections={year} options={yearOptions} placeholder='Year' set={setYear}/>
          <SettingsMultiSelect selections={majors} options={majorsOptions} placeholder='Major(s)' set={setMajors} max={3}/>
          <SettingsMultiSelect selections={minors} options={minorOptions} placeholder='Minor(s)' set={setMinors} max={3}/>
          <SettingsMultiSelect selections={interests} options={tagOptions.map(option => option.label)} placeholder='Interests' set={setInterests} max={18} showInner={false} hideOnClick={false}/>
          <div className='selections'>
              {interests.map(interest => <div className='selection'>{interest}</div>)}
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
