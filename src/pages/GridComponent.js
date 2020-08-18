import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  // Typography,
  Grid,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './GridComponent.css';

function GridComponent(props) {
  const GridList = props.clubs.map((club, i) => (
    <Grid item xs={12} sm={6} md={4} key={i}>
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
              {/*<Typography gutterBottom variant="h5" component="h2">
              {club.name}
            </Typography>*/}
              <div className="info-flex">
                <div className="icon-title-flex">
                  <img
                    className="card-club-logo"
                    src={require('./assets/ethicalLogo.jpg')}
                    alt="logo"
                  />
                  <div className="club-name">{club.name}</div>
                </div>
                <div className="grid-tags-flex">
                  {club.tags.map((tag) => (
                    <div className="grid-tag"> {tag} </div>
                  ))}
                </div>
                <div className="req-flex">
                  {club.req_app ? (
                    <div className="grid-tag" id="app-req">
                      <span role="img" aria-label="emoji">
                        ✎
                      </span>{' '}
                      Requires App
                    </div>
                  ) : (
                    <div className="grid-tag" id="app-not-req">
                      <span role="img" aria-label="emoji">
                        😊
                      </span>{' '}
                      No App Required
                    </div>
                  )}
                  {club.status ? (
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
              </div>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  ));
  return (
    <Grid container spacing={4}>
      {GridList}
    </Grid>
  );
}

// This function gets a piece of the app state that is stored in redux store
const mapStateToProps = (state) => ({
  clubs: state.catalog.clubs,
});

export default withRouter(connect(mapStateToProps)(GridComponent));
