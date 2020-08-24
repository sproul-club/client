import React from 'react';
import Select from 'react-select';

const customStyles = {
  multiValue: (provided, state) => ({
    ...provided,
    background: '#D1D3D4',
    color: '#2b2b2b',
  }),
  control: () => ({
    display: 'flex',
    width: '430px',
    margin: 0,
    fontSize: 14,
    border: 'solid 1px #2b2b2b',
    borderRadius: 5,
    padding: 0,
    background: 'white',
  }),
  menu: (provided, state) => ({
    ...provided,
    margin: 0,
    marginTop: 2,
    width: '430px',
    fontSize: 16,
    textAlign: 'left',
    color:
      state.selectProps.value && state.selectProps.value.length >= 3
        ? '#cccccc'
        : '#2b2b2b',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    background: '#D1D3D4',
    color: '#2b2b2b',
    borderRadius: 30,
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#2b2b2b',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    width: 0,
  }),
};

const handleChange = (value, props) => {
  if (props.multi) {
    if (value && value.length >= 3) {
      // recolor option text to light grey, to look unclickable :'(
      if (value.length > 3) {
        value.pop(); // remove 4th tag
      }
    }
  }
  props.set(value);
};

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
    lineHeight="16px"
    borderRadius="4"
    marginLeft="4px"
    defaultValue={props.defaultValue || null}
    isSearchable={props.search}
    isMulti={props.multi}
    options={props.options}
    placeholder={props.placeholder}
    maxMenuHeight={200}
    onChange={(e) => handleChange(e, props)}
    closeMenuOnSelect={!props.multi}
  />
);

export default Dropdown;
