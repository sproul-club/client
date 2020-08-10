import React from 'react';
import Select from 'react-select';

const customStyles = {
  multiValue: (provided, state) => ({
    ...provided,
    background: '#54a0f1',
    color: 'white',
    'border-radius': 30,
  }),
  control: () => ({
    display: 'flex',
    width: '430px',
    margin: 0,
    fontSize: 14,
    border: 'solid 1px #2b2b2b',
    borderRadius: 5,
    'line-height': 16,
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
    color: '#2b2b2b',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    background: '#54a0f1',
    color: 'white',
    borderRadius: 30,
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

const Dropdown = (props) => (
  <Select
    styles={customStyles}
    theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        neutral50: '#949494',
        danger: 'white',
        dangerLight: '#54a0f1',
        neutral80: 'white',
      },
    })}
    isSearchable={props.search}
    isMulti={props.multi}
    options={props.options}
    placeholder={props.placeholder}
    maxMenuHeight={200}
    // onChange={(e) => props.set(e)}
  />
);

export default Dropdown;
