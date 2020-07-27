import React, { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import "./signup.css";

const DropdownSearch = (props) => {
    const styles = {
        chips: {
            'background': '#8ACEFD',
            'font-family': 'montserrat, sans-serif',
            'font-weight': '600',
            'font-style': 'normal',
            'font-size': '9.5px',},
        searchBox: {
            'font-family': 'montserrat, sans-serif',
            'font-weight': '600',
            'font-style': 'normal',
            'font-size': '12px',
            'border': 'solid 1px #949494',
            'font-style': 'italic',
            'width': '297px',
            'padding': '6.5px',
            'margin': '10px',
            'margin-bottom': '12px',
            'margin-left': '19px'},
        inputField: {
            'font-family': 'montserrat, sans-serif',
            'font-weight': '600',
            'font-style': 'normal',
            'font-size': '12px',
            'width': '170px',},
        option: {
            'color': '#2B2B2B',
            'font-family': 'montserrat, sans-serif',
            'font-weight': '600',
            'font-style': 'normal',
            'font-size': '12px'},
        optionContainer: {
            'font-family': 'montserrat, sans-serif',
            'font-weight': '600',
            'font-style': 'normal',
            'font-size': '12px',
            'border-radius': '2px',
            'border': 'solid 1px #949494',
            'width': '297px',
            'height': '170px',
            'margin-left': '19px',},
    }

    return (
        <div className="multiselect">
            <Multiselect
            options={props.options}
            selectionLimit="3"
            displayValue="key"
            placeholder="Add up to 3 category tags"
            disablePreSelectedValues={true}
            closeIcon="cancel"
            avoidHighlightFirstOption={true}
            hidePlaceholder={true}
            style={styles}
            singleSelect={props.binary}
        />
        </div>
    );
}

export default DropdownSearch;