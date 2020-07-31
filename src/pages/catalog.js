import React, { useState } from 'react';
import './catalog.css';
import GridComponent from './GridComponent';
import { connect } from 'react-redux';
import { searchClubs } from '../actions/catalog';
// import ethicalheader from './assets/ethicalheader.png';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Button, Form, TextBox, CheckBox } from 'react-form-elements';

import { makeStyles } from '@material-ui/core/styles';

// https://10xn41w767.codesandbox.io/#objects
import { Multiselect } from 'multiselect-react-dropdown';

const Catalog = ({ searchClubs }) => {
  var tagOptions = [
    { key: 'ASUC', id: 0 },
    { key: 'Business', id: 1 },
    { key: 'CalGreek', id: 2 },
    { key: 'Community Service', id: 3 },
    { key: 'Computer Science', id: 4 },
    { key: 'Consulting', id: 5 },
    { key: 'Cultural', id: 6 },
    { key: 'Design', id: 7 },
    { key: 'Engineering', id: 8 },
    { key: 'Environment & Sustainability', id: 9 },
    { key: 'Health & Wellness', id: 10 },
    { key: 'Media & Publication', id: 11 },
    { key: 'Religious & Spiritual', id: 12 },
    { key: 'Performing Arts', id: 13 },
    { key: 'Political', id: 14 },
    { key: 'Sciences', id: 15 },
    { key: 'Sports & Recreation', id: 16 },
    { key: 'Social Good', id: 17 },
    { key: 'Technology', id: 18 },
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
    console.log({ name, tags, appReq, status });
    const searchParams = { name, tags, appReq, status };

    searchClubs(searchParams);
  };

  return (
    <div className="App">
      <div className="header">
        <a href="/" className="logo">
          sproul.club
        </a>
        <div className="header-right">
          <a href="catalog">Catalog</a>
          <a href="login">Club sign in</a>
          <a className="active" href="add">
            Add a club
          </a>
        </div>
      </div>
      <div className="content">
        <div className="sidebar">
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
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
                  />
                  <Button>Search</Button>
                </Form>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
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
            <AccordionItem>
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
            <AccordionItem>
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
    </div>
  );
};

export default connect(null, { searchClubs })(Catalog);
