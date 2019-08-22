import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/home';
import Pong from '../Pong/pong';


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/pong" component={Pong} />
        </Switch>
    )
}
export default Router; 