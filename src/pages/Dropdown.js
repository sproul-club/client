import React from 'react';
import Select from 'react-select';

const customStyles = {
  multiValue: (provided, state) => ({
    ...provided,
    background: '#8ACEFD',
    color: 'white',
    'border-radius': 10,
  }),
  control: () => ({
    display: 'flex',
    width: 310,
    margin: 7,
    marginBottom: 8,
    fontSize: 12,
    fontFamily: 'montserrat, sans-serif',
    fontWeight: 600,
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
    fontWeight: 600,
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#4e4e4e',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    background: '#8ACEFD',
    color: 'white',
    borderRadius: 10,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#4e4e4e',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: 'white',
    'margin-left': "4px",
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
        dangerLight: '#8ACEFD',
      },
    })}
    isSearchable={props.search}
    isMulti={props.multi}
    options={props.options}
    placeholder={props.placeholder}
    onChange={(e) => props.set(e)}
  />
);

export default Dropdown;
