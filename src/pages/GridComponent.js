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
  

  const GridList = filteredClubs.map((club, i) => {
    return (
      <Grid item key={i} sm={12} md={6} lg={4} className="club-card">
        <Card className={root}>
          <CardActionArea>
            <Link
              to={{
                pathname: `/club/${club.link_name}`,
                state: { modal: true },
              }}
              style={{
                textDecorationLine: 'None',
                color: 'Black',
              }}
            >
              <CardMedia
                style={{ height: 0, paddingTop: '56%' }}
                className={media}
                image={club.banner_url || require('./assets/default_banner.jpg')}
              />
              <CardContent
                style={{
                  padding: '14px',
                  paddingTop: '9px',
                }}
              >
                <div className="info-flex">
                  <div className="icon-title-flex">
                    <img
                      className="card-club-logo"
                      src={club.logo_url || require('./assets/default_logo.jpg')}
                      alt="logo"
                    />
                    <div className="club-name">{club.name}</div>
                  </div>
                </div>
                <div className="req-flex">
                  {club.app_required ? (
                    <div className="grid-tag" id="app-req">
                      <CreateIcon style={{ fontSize: '1em'}} />
                      <span>Requires App</span>
                    </div>
                  ) : (
                    <div className="grid-tag" id="app-not-req">
                      <HappyIcon style={{ fontSize: '1em'}} />
                      <span>No App Required</span>
                    </div>
                  )}
                  {club.new_members ? (
                    <div className="grid-tag" id="open-tag">
                      <CheckIcon style={{ fontSize: '1em'}} />
                      <span>Taking New Members</span>
                    </div>
                  ) : (
                    <div className="grid-tag" id="not-open-tag">
                      <CrossIcon style={{ fontSize: '1em'}} />
                      <span>Not Taking New Members</span>
                    </div>
                  )}
                </div>
                <div className="grid-tags-flex">
                  {club.tags.map((tag, i) => (
                    <div className="grid-tag" key={i}>
                      {' '}
                      {tagOptions.length > 0 && tagOptions[tag].label}{' '}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      </Grid>
    )});
    return (
      <div className="wrapper">
        <div className="num-results">
          {num_clubs ? `${num_clubs} Results` : loading ? '' : 'No Results Found'}
        </div>
        <Grid container spacing={2} className="card-grid">
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
