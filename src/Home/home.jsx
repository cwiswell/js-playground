import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    }
  });

const Home = (prop) => {
    return (
        <Fragment>
            <Typography variant="h4">
                Home
            </Typography>
        </Fragment>
    );
}

export default withStyles(styles)(Home);