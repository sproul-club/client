import React, { useState } from 'react';
import './catalog.css';
import GridComponent from './GridComponent';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchClubs } from '../actions/catalog';
import DropdownSearch from "./dropdownsearch2.js";

// import ethicalheader from './assets/ethicalheader.png';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Form, TextBox, CheckBox } from 'react-form-elements';

import { makeStyles } from '@material-ui/core/styles';

// https://10xn41w767.codesandbox.io/#objects
import { Multiselect } from 'multiselect-react-dropdown';

const Catalog = ({ searchClubs }) => {
  var tagOptions = [
    { key: 'Advocacy', id: 0 },
    { key: 'ASUC', id: 1 },
    { key: 'Business', id: 2 },
    { key: 'CalGreek', id: 3 },
    { key: 'Community Service', id: 4 },
    { key: 'Computer Science', id: 5 },
    { key: 'Consulting', id: 6 },
    { key: 'Cultural', id: 7 },
    { key: 'Design', id: 8 },
    { key: 'Engineering', id: 9 },
    { key: 'Environment & Sustainability', id: 10 },
    { key: 'Health & Wellness', id: 11 },
    { key: 'Media & Publication', id: 12 },
    { key: 'Performing Arts', id: 13 },
    { key: 'Political', id: 14 },
    { key: 'Pre-professional', id: 15 },
    { key: 'Religious & Spiritual', id: 16 },
    { key: 'Research', id: 17 },
    { key: 'Sciences', id: 18 },
    { key: 'Social', id: 19 },
    { key: 'Social Good', id: 20 },
    { key: 'Sports & Recreation', id: 21 },
    { key: 'Technology', id: 22 },
  ];

  const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  const [name, setName] = useState('');
  const [appReq, setAppReq] = useState(true);
  const [status, setStatus] = useState(true);

  const multiselectRef = React.createRef();

  const searchAllClubs = () => {
    const tags = multiselectRef.current.getSelectedItems();
    const searchParams = { name, tags, appReq, status };

    // Calls searchClubs redux action, which hits the backend API
    // then updates the apps state in redux to be the response
    // This data is then read in the GridComponent through mapStateToProps
    searchClubs(searchParams);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="sidebar">
          <Accordion
            allowMultipleExpanded
            allowZeroExpanded
            preExpanded={['a', 'b', 'c', 'd']}
          >
            <AccordionItem className="accordion-group" uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>Search</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Form onSubmit={() => searchAllClubs()} name="submit">
                  <TextBox
                    name="name"
                    label=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search by name"
                    style={{ width: '97.5%', height: '25px', }}
                  />
                  <button className="search-button">Search</button>
                </Form>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>Club Tags</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Multiselect
                  options={tagOptions}
                  selectionLimit="3"
                  displayValue="key"
                  ref={multiselectRef}
                  showCheckbox={true}
                />
                
                
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Application Requirements
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CheckBox
                  label="Requires app"
                  isChecked={appReq}
                  onClick={() => setAppReq(true)}
                  name="appReq"
                  value="checkbox value"
                />
                <CheckBox
                  label="No app required"
                  isChecked={!appReq}
                  onClick={() => setAppReq(false)}
                  name="noAppReq"
                  value="checkbox value"
                />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>Member Status</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CheckBox
                  label="Looking for members"
                  isChecked={status}
                  onClick={() => setStatus(true)}
                  name="checkbox"
                  value="checkbox value"
                />
                <CheckBox
                  label="Not looking for members"
                  isChecked={!status}
                  onClick={() => setStatus(false)}
                  name="checkbox"
                  value="checkbox value"
                />
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="cards">
          <GridComponent classes={classes} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(connect(null, { searchClubs })(Catalog));
