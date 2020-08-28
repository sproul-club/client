import React, { useState, useEffect } from 'react';
import './catalog.css';
import GridComponent from './GridComponent';
import Footer from '../layout/Footer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchClubs, clearOrganization } from '../actions/catalog';
import Dropdown from './CatalogDropdown.js';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Form, TextBox, CheckBox } from 'react-form-elements';
import { makeStyles } from '@material-ui/core/styles';

const Catalog = ({ searchClubs, clearOrganization, tagOptions }) => {
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
  const [tags, setTags] = useState([]);

  //checkbox logic jankness
  const [appReq, setAppReq] = useState(false);
  const [noAppReq, setNoAppReq] = useState(false);
  const [recruiting, setRecruiting] = useState(false);
  const [notRecruiting, setNotRecruiting] = useState(false);

  // clearing organization to be viewed every time navigate back to club page
  useEffect(() => {
    clearOrganization();
  }, [clearOrganization]);

  // run search when any state except "name" updates
  useEffect(() => {
    searchAllClubs();
  }, [tags, appReq, noAppReq, recruiting, notRecruiting]);

  const searchAllClubs = () => {
    //checkbox logic jankness
    var appReqValue = null;
    if (appReq && !(noAppReq)) {
      appReqValue = true;
    } else if (!appReq && noAppReq) {
      appReqValue = false;
    }
    var recruitingValue = null;
    if (recruiting && !(notRecruiting)) {
      recruitingValue = true;
    } else if (!recruiting && notRecruiting) {
      recruitingValue = false;
    }

    const tagValues = tags.map((tag) => tag.value);
    const searchParams = { name, tags: tagValues, appReq: appReqValue, status: recruitingValue };
    searchClubs(searchParams);
  };

  const resetFilters = () => {
    setName('');
    setTags([]);
    setAppReq(false);
    setNoAppReq(false);
    setRecruiting(false);
    setNotRecruiting(false);
  }

  const tagsOnChange = (input) => {
    var newTags = input;
    if (input === null) {
      newTags = [];
    }
    setTags(newTags);
  }

  function toggleAppReq() {
    setAppReq(!appReq);
    setNoAppReq(false);
  }

  function toggleNoAppReq() {
    setAppReq(false);
    setNoAppReq(!noAppReq);
  }

  function toggleRecruiting() {
    setRecruiting(!recruiting);
    setNotRecruiting(false);
  }

  function toggleNotRecruiting() {
    setRecruiting(false);
    setNotRecruiting(!notRecruiting);
  }

  return (
    <div className="catalog">
      <div className="content">
        <div className="sidebar">
          <Accordion
            allowMultipleExpanded
            allowZeroExpanded
            preExpanded={['a', 'b', 'c']}
          >
            <AccordionItem className="accordion-group" uuid="a">
              <AccordionItemPanel>
                <div className="reset-wrapper">
                  <h2>Filters</h2>
                  <button
                    className="reset-filters"
                    type="submit"
                    onClick={() => resetFilters()}
                  >
                    reset
                  </button>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="b">
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
                      width: '200px',
                      height: '34px',
                      borderRadius: '5px',
                      border: 'transparent',
                      marginLeft: '-10px',
                      paddingLeft: '10px',
                      fontSize: '13px',
                      fontFamily: 'Roboto,sans-serif',
                    }}
                  />
                  <button
                    className="search-button"
                    type="submit"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </Form>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>Club Tags </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Dropdown
                  options={tagOptions}
                  multi={true}
                  search={true}
                  placeholder="Add up to 3 tags"
                  value={tags}
                  set={tagsOnChange}
                />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Application Requirements
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CheckBox
                  key={'appReq' + Math.random()}
                  className="checkbox"
                  label="Requires app"
                  isChecked={appReq}
                  onClick={() => toggleAppReq()}
                  name="appReq"
                  value="checkbox value"
                />
                <CheckBox
                  key={'noAppReq' + Math.random()}
                  className="checkbox"
                  label="No app required"
                  isChecked={noAppReq}
                  onClick={() => toggleNoAppReq()}
                  name="noAppReq"
                  value="checkbox value"
                />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>Membership Status</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CheckBox
                  key={'recruiting' + Math.random()}
                  className="checkbox"
                  label="Looking for members"
                  isChecked={recruiting}
                  onClick={() => toggleRecruiting()}
                  name="checkbox"
                  value="checkbox value"
                />
                <CheckBox
                  key={'notRecruiting' + Math.random()}
                  className="checkbox"
                  label="Not looking for members"
                  isChecked={notRecruiting}
                  onClick={() => toggleNotRecruiting()}
                  name="checkbox"
                  value="checkbox value"
                />
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

const mapStateToProps = (state) => ({
  tagOptions: state.profile.tagOptions
})

export default withRouter(
  connect(mapStateToProps, { searchClubs, clearOrganization })(Catalog)
);

