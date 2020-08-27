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
  // const [appReq, setAppReq] = useState(null);
  // const [status, setStatus] = useState(null);
  const [tags, setTags] = useState([]);

  //checkbox logic jankness
  const [appReqChecked, setAppReqChecked] = useState(false);
  const [noAppReqChecked, setNoAppReqChecked] = useState(false);
  const [recruitingChecked, setRecruitingChecked] = useState(false);
  const [notRecruitingChecked, setNotRecruitingChecked] = useState(false);

  // clearing organization to be viewed every time navigate back to club page
  useEffect(() => {
    clearOrganization();
  }, [clearOrganization]);

  const searchAllClubs = () => {

    //checkbox logic jankness
    var appReq;
    if (appReqChecked && !(noAppReqChecked)){
      appReq = true;
    } else if (!appReqChecked && noAppReqChecked){
      appReq = false;
    } else {
      appReq = null;
    }
    var status = null;
    if (recruitingChecked && !(notRecruitingChecked)){
      status = true;
    } else if (!recruitingChecked && notRecruitingChecked){
      status = false;
    } else {
      status = null;
    }

    const tagValues = tags.map((tag) => tag.value);
    const searchParams = { name, tags: tagValues, appReq, status };
    searchClubs(searchParams);
  };

  return (
    <div className="App">
      <div className="content">
        <div className="sidebar">
          <Accordion
            allowMultipleExpanded
            allowZeroExpanded
            preExpanded={['a', 'b', 'c', 'd', 'e']}
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
                      width: '200px',
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
                    <i className="fa fa-search"></i>
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
                <CheckBox
                  className="checkbox"
                  label="Requires app"
                  onClick={() => {setAppReqChecked(!appReqChecked)}}
                  name="appReq"
                  value="checkbox value"
                />
                <CheckBox
                  className="checkbox"
                  label="No app required"
                  onClick={() => setNoAppReqChecked(!noAppReqChecked)}
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
                  className="checkbox"
                  label="Looking for members"
                  onClick={() => setRecruitingChecked(!recruitingChecked)}
                  name="checkbox"
                  value="checkbox value"
                />
                <CheckBox
                  className="checkbox"
                  label="Not looking for members"
                  onClick={() => setNotRecruitingChecked(!notRecruitingChecked)}
                  name="checkbox"
                  value="checkbox value"
                />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group" uuid="e">
              <AccordionItemPanel>
                  <button
                    className="search-all"
                    type="submit"
                    onClick={() => searchAllClubs()}
                  >
                    Filter results
                  </button>
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

