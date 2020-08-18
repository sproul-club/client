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
    color: '#4e4e4e',
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
  "@media only screen and (min-width: 1700px)": {
    menu: (provided, state) => ({
      ...provided,
      width: 500,
    }),
  },
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
    classNamePrefix="drop"
    isSearchable={props.search}
    isMulti={props.multi}
    options={props.options}
    placeholder={props.placeholder}
    onChange={(e) => props.set(e)}
    maxMenuHeight={200}
  />
);

export default Dropdown;
