import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import { searchClubs } from '../actions/catalog';
import './GridComponent.css';
import { filterClubs } from '../utils/filterClubs';
import ClubCard from './ClubCard';
import uwubear from './assets/landingbears.svg';

function GridComponent({ tagOptions, clubs, loading, formDetails, num_displayed, displayBanner, favorites}) {
  console.log(clubs);

  if (!formDetails.sort) {
    formDetails.sort = 'Asc';
  }
  const [num_filtered_results, filteredClubs] = filterClubs(clubs, formDetails, tagOptions, num_displayed, favorites);

  const GridList = filteredClubs.map((club, i) => <ClubCard key={i} tagOptions={tagOptions} club={club} displayBanner={displayBanner}/>);

  return (
    <div className="wrapper">
      <div className="num-results">
        {num_filtered_results ? `Displaying ${num_filtered_results} Results` : loading ? '' : 'No Results Found'}
      </div>
      <Grid justify='space-between' container className="card-grid">
        {GridList}
      </Grid>
    </div>
  );
}

// This function gets a piece of the app state that is stored in redux store
const mapStateToProps = (state) => ({
  clubs: state.catalog.allOrganizations,
  formDetails: state.catalog.formDetails,
  tagOptions: state.profile.tagOptions,
  num_displayed: state.catalog.num_displayed
});

export default connect(mapStateToProps, { searchClubs })(
  withRouter(GridComponent)
);
