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
    background: '#D1D3D4',
    color: '#2b2b2b',
    borderRadius: 30,
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    'margin-left': '4px',
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
        danger: '#2b2b2b',
        dangerLight: '#D1D3D4',
      },
    })}
    defaultValue={props.defaultValue || null}
    isSearchable={props.search}
    isMulti={props.multi}
    options={props.options}
    placeholder={props.placeholder}
    maxMenuHeight={200}
  />
);

export default Dropdown;
