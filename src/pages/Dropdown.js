import React from 'react';
import Select from 'react-select';

const customStyles = {
  multiValue: (provided, state) => ({
    ...provided,
    background: '#D1D3D4',
    color: '#2b2b2b',
    'border-radius': 4,
  }),
  control: () => ({
    display: 'flex',
    width: 310,
    margin: 7,
    marginBottom: 8,
    fontSize: 12,
    fontFamily: 'montserrat, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    border: 'solid 1px #949494',
    borderRadius: 5,
  }),
  menu: (provided, state) => ({
    ...provided,
    margin: 8,
    marginTop: 2,
    width: 310,
    fontSize: '12px',
    fontFamily: 'montserrat, sans-serif',
    fontWeight: 300,
    fontStyle: 'normal',
    textAlign: 'left',
    color: (state.selectProps.value && state.selectProps.value.length >= 3) ? '#cccccc' : '#4e4e4e'
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    background: '#D1D3D4',
    color: '#2b2b2b',
    borderRadius: 10,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#4e4e4e',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    'margin-left': "4px",
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    width: 0,
  }),

  clearIndicator: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '5px 8px',
  }),
  "@media only screen and (min-width: 1700px)": {
    menu: (provided, state) => ({
      ...provided,
      width: 500,
    }),
  },
};

const handleChange = (value, props) => {
  if (props.multi) {
    if (value && value.length >= 3) {
      // recolor option text to light grey, to look unclickable :'(
      if (value.length > 3) {
        value.pop();                // remove 4th tag
        props.error('tagError');    // make popup visible for ~2s
        setTimeout(function() {props.error('tagErrorNone');}, 1000);
      }
    }
  }
  props.set(value);
}

const Dropdown = (props) => (
  <Select
    styles={customStyles}
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
    isSearchable={props.search}
    isMulti={props.multi}
    options={props.options}
    placeholder={props.placeholder}
    onChange={(e) => handleChange(e, props)}
    closeMenuOnSelect={!props.multi}
    maxMenuHeight={200}
  />
);

export default Dropdown;
