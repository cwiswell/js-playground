import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const Home = (prop) => {
    return (
        <Fragment>
            <Typography variant="h4">
                Home
            </Typography>
            <Typography variant="body1">
                This site is design to contain many different javascript projects being worked on.
            </Typography>
        </Fragment>
    );
}

export default (Home);