import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import useOnClickOutside from '../../utils/useOnClickOutside'

export const SettingsMultiSelect = ({options, selections, placeholder, set, max = Infinity, hideOnClick = true, showInner = true}) => {
  const [showDropdown, setShowDropown] = useState(false)

  const dropdownRef = useRef()

  useOnClickOutside(dropdownRef, () => {
    setShowDropown(false)
  })
  
  const selectOption = (option) => {

    if (selections.includes(option)){
      const optionIndex = selections.indexOf(option)
      var newSelections = [...selections]
      newSelections.splice(optionIndex, 1)
    } else {
      if (selections.length >= max) return
      var newSelections = [...selections, option]
    }
    
    set(newSelections)
    hideOnClick && setShowDropown(false)
  }
  
  const innerSelections = (selections.length === 0 || showInner === false) ? 
    <div className='placeholder'>{placeholder}</div> :
      Array.isArray(selections) ?
        selections.join(', ') :
        selections
  
  

  return (
    <SettingsDropDownStyles showDropdown={showDropdown} ref={dropdownRef}>
      <div onClick={() => setShowDropown(!showDropdown)} className='selection-input'>
        {innerSelections}
        {showDropdown ? <i className='fas fa-caret-up'/> : <i className='fas fa-caret-down'/>}
      </div>

      {showDropdown && (
        <div className="selection-dropdown scrollable-content">
          {options.map((option, i) => (
            <div className='dropdown-option' key={i} onClick={() => selectOption(option)} >
              <input type="checkbox" checked={selections.includes(option)}/> 
              {option}
            </div>
          ))}
        </div>
      )}
    </SettingsDropDownStyles>
  )
}


export const SettingsDropdown = ({options, selections, placeholder, set, hideOnClick = true}) => {
  const [showDropdown, setShowDropown] = useState(false)

  const dropdownRef = useRef()

  useOnClickOutside(dropdownRef, () => {
    setShowDropown(false)
  })

  const selectOption = (option) => {
    set(option)
    // By default when item is selected, dropdown closes
    hideOnClick && setShowDropown(false)
  }

  return (
    <SettingsDropDownStyles showDropdown={showDropdown} ref={dropdownRef}>
      <div onClick={() => setShowDropown(!showDropdown)} className='selection-input'>
        {selections.length > 0 ? selections : <div className='placeholder'>{placeholder}</div>}
        {showDropdown ? <i className='fas fa-caret-up'/> : <i className='fas fa-caret-down'/>}
      </div>

      {showDropdown && (
        <div className="selection-dropdown scrollable-content">
          {options.map((option, i) => (
            <div className='dropdown-option' key={i} onClick={() => selectOption(option)} >
              <input type="checkbox" checked={selections.includes(option)}/> 
              {option}
            </div>
          ))}
        </div>
      )}
    </SettingsDropDownStyles>
  )
}


const SettingsDropDownStyles = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 16px;
    cursor: pointer;

    * {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none; /* Konqueror HTML */
           -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
    }

    .selection-input {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      height: 30px;
      padding: 5px 10px;
      border: 1px solid rgb(200, 196, 196);
      border-radius: 5px;

      ${props => props.showDropdown && (
        'border-bottom: none;' +
        'border-radius: 5px 5px 0px 0px;'
      )}

      .placeholder {
        color: #8D8D8D;
      }

      .fas {
        font-size: 14px;
        color: #C4C4C4;
      }
    }

    .selection-dropdown {
      position: relative;
      background: white;
      border: 1px solid rgb(200, 196, 196);
      z-index: 999;
      width: 100%;
      border-radius: 0px 0px 5px 5px;
      max-height: 200px;
      overflow-y: auto;
      position: absolute;


      .dropdown-option {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 12px;
        height: 20.5px;
        line-height: 20.5px;
        padding-left: 12px;

        &:hover {
          background: #CDEAFF;
        }
        input {
          margin: 0px;
          margin-right: 5px;
          margin-top: 3px;
          margin-bottom: 3px;
        }
      }
    }
`