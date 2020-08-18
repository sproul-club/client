import React, { useState } from 'react';
import './catalog.css';
import GridComponent from './GridComponent';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchClubs } from '../actions/catalog';
import Dropdown from './Dropdown.js';

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

const Catalog = ({ searchClubs }) => {
  var tagOptions = [
    { label: 'Advocacy', value: 0 },
    { label: 'Business', value: 1 },
    { label: 'CalGreek', value: 2 },
    { label: 'Community Service', value: 3 },
    { label: 'Computer Science', value: 4 },
    { label: 'Consulting', value: 5 },
    { label: 'Cultural', value: 6 },
    { label: 'Design', value: 7 },
    { label: 'Engineering', value: 8 },
    { label: 'Environmental', value: 9 },
    { label: 'Health', value: 10 },
    { label: 'Media', value: 11 },
    { label: 'Performing Arts', value: 12 },
    { label: 'Political', value: 13 },
    { label: 'Pre-professional', value: 14 },
    { label: 'Religious & Spiritual', value: 15 },
    { label: 'Research', value: 16 },
    { label: 'Sciences', value: 17 },
    { label: 'Social', value: 18 },
    { label: 'Social Good', value: 19 },
    { label: 'Sports & Rec.', value: 20 },
    { label: 'Technology', value: 21 },
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
  const [tags, setTags] = useState([]);

  // const multiselectRef = React.createRef();

  const searchAllClubs = () => {
    // const tags = multiselectRef.current.getSelectedItems();
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
              <AccordionItemPanel>
                <Form
                  className="search-bar"
                  onSubmit={() => searchAllClubs()}
                  name="submit"
                >
                  <TextBox
                    name="name"
                    label=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search by name"
                    style={{
                      width: '275px',
                      height: '34px',
                      borderRadius: '5px',
                      border: 'transparent',
                      marginLeft: '-10px',
                      paddingLeft: '7px',
                    }}
                  />
                  <button
                    className="search-button"
                    type="submit"
                    style={{ marginLeft: '-5px' }}
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </Form>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>Club Tags</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Dropdown
                  options={tagOptions}
                  multi={true}
                  search={true}
                  placeholder="Add up to 3 tags"
                  set={setTags}
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
