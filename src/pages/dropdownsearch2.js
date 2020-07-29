import React, { useState } from "react";
import Select from 'react-select';

const customStyles = {
    multiValue: (provided, state) => ({
        ...provided,
        'background': '#8ACEFD',
        'color': 'white',
        'border-radius': 10,
    }),
    control: () => ({
        display: 'flex',
        width: 310,
        margin: 7,
        'margin-bottom': 8,
        'font-size': 12,
        'font-family': 'montserrat, sans-serif',
        'font-weight': 500,
        'font-style': 'normal',
        'border': 'solid 1px #949494',
        'border-radius': 5,
    }),
    menu: (provided, state) => ({
        ...provided,
        margin: 8,
        'margin-top': 2,
        width: 310,
        'font-size': '12px',
        'font-family': 'montserrat, sans-serif',
        'font-weight': 400,
        'font-style': 'normal',
        'text-align': 'left',
        'color': '#4e4e4e',
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        'background': '#8ACEFD',
        'color': 'white',
        'border-radius': 10,
    }),
    singleValue: (provided, state) => ({
        ...provided,
        'color': '#4e4e4e',
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        width:0,
    }),
  }

const DropdownSelect = (props) => (
  <Select
    styles={customStyles}
    theme={theme => ({
        ...theme,
        colors: {
            ...theme.colors,
            neutral50: '#949494',
            danger: 'white',
            dangerLight: '#8ACEFD',
            neutral80: 'white',
        },})}
    isSearchable={props.search}
    isMulti={props.multi}
    options={props.options} 
    placeholder={props.placeholder}
    onChange={e => props.set(e)}
    isSearchable={false}/>
)

export default DropdownSelect;