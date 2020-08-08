import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { withRouter, Link } from "react-router-dom";

function GridComponent(props) {
  const GridList = props.clubs.map((club, i) => (
    <Grid item xs={12} sm={6} md={4} key={i}>
      <Card className={props.classes.root}>
        <CardActionArea>
            <Link
              to={{
                pathname: "/club/" + club.name,
                state: { modal: true}
              }}
              style={{
                textDecorationLine: 'None',
                color: 'Black'
              }}
            >
          <CardMedia
            style={{ height: 0, paddingTop: '56%' }}
            className={props.classes.media}
            image={require('./assets/ethicalheader.png')}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {club.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <div className="tags-flex">
                { club.tags.map(tag => 
                  <div className="tag"> {tag} </div>
                )}
              </div>
            </Typography>
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
