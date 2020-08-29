import React, { useState, useEffect } from 'react';
import './catalog.css';
import GridComponent from './GridComponent';
import Footer from '../layout/Footer';
import { withRouter } from 'react-router-dom';
import LoadingComponent from '../layout/LoadingComponent';
import { throttle } from '../utils/throttle';
import { connect } from 'react-redux';
import {
  searchClubs,
  clearOrganization,
  loadMoreOrgs,
  setFormDetails,
  clearOrganizations,
} from '../actions/catalog';
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

const Catalog = ({
  searchClubs,
  clearOrganization,
  tagOptions,
  loadMoreOrgs,
  num_clubs,
  formDetails,
  setFormDetails,
}) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },
    media: {
      height: 140,
    },
  });
  const {
    name,
    tags,
    appReq,
    noAppReq,
    recruiting,
    notRecruiting,
  } = formDetails;

  const eventsLoadedAtOnce = 18;

  const classes = useStyles();

  const [moreLoading, setMoreLoading] = useState(false);
  const [numResults, setNumResults] = useState(eventsLoadedAtOnce);

  const [expandSearch, setExpandSearch] = useState(true);

  const toggleExpandedSearch = () => setExpandSearch(!expandSearch);

  // clearing organization to be viewed every time navigate back to club page
  useEffect(() => {
    clearOrganization();
  }, [clearOrganization]);

  // run search when any state except "name" updates
  useEffect(() => {
    searchAllClubs();
  }, [tags, appReq, noAppReq, recruiting, notRecruiting]);

  // Listener for when scroll reaches bottom, call the function to load more clubs
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight - 0.5 &&
        numResults < num_clubs
      ) {
        searchAllClubs(eventsLoadedAtOnce, numResults, true);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [numResults, num_clubs]);

  const searchAllClubs = throttle(
    async (limit = eventsLoadedAtOnce, skip = 0, loadMore = false) => {
      //checkbox logic jankness
      var appReqValue = null;
      if (appReq && !noAppReq) {
        appReqValue = true;
      } else if (!appReq && noAppReq) {
        appReqValue = false;
      }
      var recruitingValue = null;
      if (recruiting && !notRecruiting) {
        recruitingValue = true;
      } else if (!recruiting && notRecruiting) {
        recruitingValue = false;
      }
      const tagValues = tags.map((tag) => tag.value);
      const searchParams = {
        name: name,
        tags: tagValues,
        appReq: appReqValue,
        status: recruitingValue,
        limit,
        skip,
      };

      if (loadMore) {
        setMoreLoading(true);
        await loadMoreOrgs(searchParams);
        setNumResults((numResults) => numResults + eventsLoadedAtOnce);
        setMoreLoading(false);
        return;
      }

      setNumResults(eventsLoadedAtOnce);
      setExpandSearch(false);
      window.scrollTo(0, 0);
      setMoreLoading(true);
      await searchClubs(searchParams);
      setMoreLoading(false);
    },
    300
  );

  const resetFilters = () => {
    setFormDetails({ name: 'name', value: '' });
    setFormDetails({ name: 'tags', value: [] });
    setFormDetails({ name: 'appReq', value: false });
    setFormDetails({ name: 'noAppReq', value: false });
    setFormDetails({ name: 'recruiting', value: false });
    setFormDetails({ name: 'notRecruiting', value: false });
  };

  const tagsOnChange = (input) => {
    var newTags = input;
    if (input === null) {
      newTags = [];
    }
    setFormDetails({ name: 'tags', value: newTags });
  };

  function toggleAppReq() {
    setFormDetails({ name: 'appReq', value: !appReq });
    setFormDetails({ name: 'noAppReq', value: false });
  }

  function toggleNoAppReq() {
    setFormDetails({ name: 'appReq', value: false });
    setFormDetails({ name: 'noAppReq', value: !noAppReq });
  }

  function toggleRecruiting() {
    setFormDetails({ name: 'recruiting', value: !recruiting });
    setFormDetails({ name: 'notRecruiting', value: false });
  }

  function toggleNotRecruiting() {
    setFormDetails({ name: 'recruiting', value: false });
    setFormDetails({ name: 'notRecruiting', value: !notRecruiting });
  }
  function changeSearch(e) {
    setFormDetails({ name: 'name', value: e.target.value });
  }

  return (
    <div className="catalog">
      <div className="content">
        <div className={`${expandSearch && 'show-search'} sidebar`}>
          <Accordion
            allowMultipleExpanded
            allowZeroExpanded
            preExpanded={['a', 'b', 'c', 'd', 'e']}
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
            <AccordionItem className="accordion-group search" uuid="b">
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
                    onChange={(e) => changeSearch(e)}
                    placeholder="Search by name"
                    style={{
                      width: '200px',
                      height: '34px',
                      borderRadius: '5px',
                      border: 'transparent',
                      marginLeft: '-10px',
                      paddingLeft: '10px',
                      fontSize: '13px',
                      fontFamily: 'Qanelas Soft',
                    }}
                  />
                  <button className="search-button" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </Form>
                <div className="expand-search">
                  <button onClick={toggleExpandedSearch}>
                    {expandSearch ? 'Hide Filters' : 'Show Filters'}
                  </button>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-group border" uuid="c">
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
            <AccordionItem className="accordion-group border" uuid="d">
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
            <AccordionItem className="accordion-group border" uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>Membership Status</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CheckBox
                  key={'recruiting' + Math.random()}
                  className="checkbox"
                  label="Taking new members"
                  isChecked={recruiting}
                  onClick={() => toggleRecruiting()}
                  name="checkbox"
                  value="checkbox value"
                />
                <CheckBox
                  key={'notRecruiting' + Math.random()}
                  className="checkbox"
                  label="Not taking new members"
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
          <div className="more-content">
            {moreLoading ? (
              <LoadingComponent />
            ) : (
              numResults < num_clubs && (
                <button
                  className="load-more"
                  onClick={() =>
                    searchAllClubs(eventsLoadedAtOnce, numResults, true)
                  }
                >
                  load more
                </button>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  num_clubs: state.catalog.num_clubs,
  tagOptions: state.profile.tagOptions,
  formDetails: state.catalog.formDetails,
});

export default withRouter(
  connect(mapStateToProps, {
    searchClubs,
    clearOrganization,
    loadMoreOrgs,
    setFormDetails,
  })(Catalog)
);
