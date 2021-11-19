import React from 'react';
import Select from 'react-select';

const handleChange = (value, props) => {
  var infinite = props.infinite || false;
  if (props.multi) {
    if (value && value.length >= 3) {
      // recolor option text to light grey, to look unclickable :'(
      if (value.length > 3 && !infinite) {
        value.pop();                        // remove 4th tag
        // commented out below two lines bc i wasn't sure what they do oop
        // props.errorPopup('tagOverflow');    // make popup visible for ~2s
        // setTimeout(function() {props.errorPopup('tagOverflowNone');}, 1000);
      }
    }
  }
  props.set(value);
}

const Dropdown = (props) => {

  return (
    <Select
    styles={props.style}
    theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        neutral50: '#949494',
        danger: '#2b2b2b',
        dangerLight: '#D1D3D4',
      },
    })}
    classNamePrefix="drop"
    isLoading={false}
    isSearchable={props.search}
    isMulti={props.multi}
    options={props.options}
    placeholder={props.placeholder}
    defaultValue={props.defaultValue}
    onChange={(e) => handleChange(e, props)}
    closeMenuOnSelect={!props.multi}
    maxMenuHeight={150}
    isClearable={false}
  />
  )
}

export default Dropdown;
