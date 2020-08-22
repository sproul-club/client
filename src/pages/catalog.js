import React, { useState } from 'react';
import './catalog.css';
import GridComponent from './GridComponent';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchClubs } from '../actions/catalog';
import Dropdown from './Dropdown.js';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Form, TextBox, CheckBox } from 'react-form-elements';
import { makeStyles } from '@material-ui/core/styles';
import { 
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox
} from '@material-ui/core/';
import { tagOptions } from '../data/tagOptions';

const Catalog = ({ searchClubs }) => {
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
  const [appReq, setAppReq] = useState(null);
  const [status, setStatus] = useState(null);
  const [tags, setTags] = useState([]);

  // const multiselectRef = React.createRef();

  const searchAllClubs = () => {
    // const tags = multiselectRef.current.getSelectedItems();
    const tagValues = tags.map((tag) => tag.value);
    const searchParams = { name, tags: tagValues, appReq, status };

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
                    <AccordionItemButton>Club Tags </AccordionItemButton>
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
                <form className="checkbox">
                  <label>
                    Requires app 
                    <input
                      name="appReq"
                      type="checkbox"
                      checked={appReq}
                      onChange={() => setAppReq(true)} 
                      />
                  </label>
                  <label>
                  No app required
                    <input
                      name="noAppReq"
                      type="checkbox"
                      checked={!appReq && appReq !== null}
                      onChange={() => setAppReq(false)} 
                      />
                  </label>
                </form>
                 {/* <CheckBox
                  label="Requires app"
                  isChecked={appReq}
                  onClick={() => setAppReq(true)}
                  name="appReq"
                  value="checkbox value"
                /> */}
                {/* <CheckBox
                  label="No app required"
                  isChecked={!appReq && appReq !== null}
                  onClick={() => setAppReq(false)}
                  name="noAppReq"
                  value="checkbox value"
                /> */}
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>Member Status</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <form className="checkbox">
                  <label>
                    Looking for members 
                    <input
                      name="appReq"
                      type="checkbox"
                      checked={status}
                      onChange={() => setStatus(true)} 
                      />
                  </label>
                  <label>
                  No app required
                    <input
                      name="noAppReq"
                      type="checkbox"
                      checked={!status && status !== null}
                      onChange={() => setStatus(false)} 
                      />
                  </label>
                </form>
                 {/* <CheckBox
                  label="Looking for members"
                  isChecked={status}
                  onClick={() => setStatus(true)}
                  name="checkbox"
                  value="checkbox value"
                /> */}
                {/* <CheckBox
                  label="Not looking for members"
                  isChecked={!status && appReq !== null}
                  onClick={() => setStatus(false)}
                  name="checkbox"
                  value="checkbox value"
                /> */}
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="cards">
          <GridComponent tagOptions={tagOptions} classes={classes} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(connect(null, { searchClubs })(Catalog));