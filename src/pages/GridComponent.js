import React, { useEffect } from 'react';
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
import { loadClubs, searchClubs } from '../actions/catalog';
import './GridComponent.css';

function GridComponent(props) {
  const { tagOptions } = props;

  useEffect(() => {
    // Return unfiltered clubs so there is some data there when first rendered
    props.loadClubs();
  }, []);

  const GridList = props.clubs.map((club, i) => (
    <Grid item key={i} sm={12} md={6} lg={4} className="club-card">
      <Card className={props.classes.root}>
        <CardActionArea>
          <Link
            to={{
              pathname: '/club/' + club.name,
              state: { modal: true },
            }}
            style={{
              textDecorationLine: 'None',
              color: 'Black',
            }}
          >
            <CardMedia
              style={{ height: 0, paddingTop: '56%' }}
              className={props.classes.media}
              image={require('./assets/ethicalheader.png')}
            />
            <CardContent>
              <div className="info-flex">
                <div className="icon-title-flex">
                  <img
                    className="card-club-logo"
                    src={require('./assets/ethicalLogo.jpg')}
                    alt="logo"
                  />
                  <div className="club-name">{club.name}</div>
                </div>
              </div>
              <div className="req-flex">
                {club.app_required ? (
                  <div className="grid-tag" id="app-req">
                    <span role="img" aria-label="emoji">
                      ✎
                    </span>{' '}
                    Requires App
                  </div>
                ) : (
                  <div className="grid-tag" id="app-not-req">
                    <span role="img" aria-label="emoji">
                      ☺︎
                    </span>{' '}
                    No App Required
                  </div>
                )}
                {club.new_members ? (
                  <div className="grid-tag" id="open-tag">
                    <span role="img" aria-label="emoji">
                      ✓
                    </span>{' '}
                    Taking New Members
                  </div>
                ) : (
                  <div className="grid-tag" id="not-open-tag">
                    <span role="img" aria-label="emoji">
                      ✗
                    </span>{' '}
                    Not Taking New Members
                  </div>
                )}
              </div>
              <div className="grid-tags-flex">
                {club.tags.map((tag, i) => (
                  <div className="grid-tag" key={i}>
                    {' '}
                    {tagOptions[tag].label}{' '}
                  </div>
                ))}
              </div>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  ));
  return (
    <div className="wrapper">
      <Grid container spacing={3} className="card-grid">
        {GridList}
      </Grid>
    </div>
  );
}

// This function gets a piece of the app state that is stored in redux store
const mapStateToProps = (state) => ({
  clubs: state.catalog.clubs,
});

export default connect(mapStateToProps, { loadClubs, searchClubs })(
  withRouter(GridComponent)
);
