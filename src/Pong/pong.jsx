import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const Pong = (prop) => {


    return (
        <Fragment>
            <Typography variant="h2">
                Pong
            </Typography>
            <div style={{ textAlign: 'center', width:'100%',border: '1px solid red', marginTop:'30px'}}>
                <div style={{ width: 800, height: 600, border: '1px solid black', textAlign: 'center', display: 'inline-block'}}>

                </div>

            </div>
        </Fragment>
    );
}

export default Pong;