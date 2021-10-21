import React from 'react';
import Select from 'react-select';

const customStyles = {
  multiValue: (provided, state) => ({
    ...provided,
    background: '#D1D3D4',
    color: '#2b2b2b',
    'border-radius': 4,
  }),
  control: (provided, state) => ({
    display: 'flex',
    margin: 7,
    marginBottom: 8,
    fontSize: 12,
    fontFamily: 'Qanelas Soft Semi Bold',
    fontWeight: 400,
    fontStyle: 'normal',
    borderRadius: 5,
    border: 'solid 1px #949494',
  }),
  menu: (provided, state) => ({
    ...provided,
    margin: 8,
    marginTop: 2,
    fontSize: '12px',
    fontFamily: 'Qanelas Soft Semi Bold',
    fontWeight: 300,
    fontStyle: 'normal',
    textAlign: 'left',
    color:
      state.selectProps.value && state.selectProps.value.length >= 3
        ? '#cccccc'
        : '#4e4e4e',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    background: '#D1D3D4',
    color: '#2b2b2b',
    borderRadius: 10,
    cursor: 'pointer',
    '&:hover': {
      color: 'hsl(0,0%,40%)',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#4e4e4e',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    'margin-left': '4px',
    padding: '2px',
    'padding-left': '5px',
    fontSize: '12px',
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
  '@media only screen and (min-width: 1700px)': {
    menu: (provided, state) => ({
      ...provided,
      width: 500,
    }),
  },
};

const handleChange = (value, props) => {
  // prevent new value added if there's already three tags
  if (value && value.length >= 3) {
    // recolor option text to light grey, to look unclickable :'(
    if (value.length > 3) {
      value.pop(); // remove 4th tag
      props.errorPopup('tagOverflow'); // make popup visible for ~2s
      setTimeout(function () {
        props.errorPopup('tagOverflowNone');
      }, 1000);
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
    classNamePrefix="drop"
    isSearchable={props.search}
    isMulti={props.multi}
    options={props.options}
    placeholder={props.placeholder}
    value={props.value}
    onChange={(e) => handleChange(e, props)}
    closeMenuOnSelect={!props.multi}
    maxMenuHeight={200}
  />
);

export default Dropdown;
