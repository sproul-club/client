import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  // Typography,
  Grid,
} from '@material-ui/core';

// import Card from 'react-bootstrap/Card';

import { connect } from 'react-redux';

import { withRouter, Link } from 'react-router-dom';
import { searchClubs } from '../actions/catalog';
import './GridComponent.css';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/CreateRounded';
import HappyIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import CheckIcon from '@material-ui/icons/CheckRounded';
import CrossIcon from '@material-ui/icons/CloseRounded';
import { filterClubs } from '../utils/filterClubs';
import ClubCard from './ClubCard';

function GridComponent({ tagOptions, clubs, num_clubs, loading, formDetails, num_displayed }) {
  const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },
    media: {
      height: 140,
    },
  });
  const { root, media } = useStyles();

  const [num_filtered_results, filteredClubs] = filterClubs(clubs, formDetails, tagOptions, num_displayed)
  

  const GridList = filteredClubs.map((club, i) => <ClubCard tagOptions={tagOptions} club={club}/>);

  return (
    <div className="wrapper">
      <div className="num-results">
        {num_clubs ? `${num_clubs} Results` : loading ? '' : 'No Results Found'}
      </div>
      <Grid justify='space-between' container spacing={2} className="card-grid">
        {GridList}
      </Grid>
    </div>
  );
}

// This function gets a piece of the app state that is stored in redux store
const mapStateToProps = (state) => ({
  clubs: state.catalog.allOrganizations,
  num_clubs: state.catalog.num_clubs,
  tagOptions: state.profile.tagOptions,
  formDetails: state.catalog.formDetails,
  tagOptions: state.profile.tagOptions,
  num_displayed: state.catalog.num_displayed
});

export default connect(mapStateToProps, { searchClubs })(
  withRouter(GridComponent)
);
