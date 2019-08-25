import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Router from "../Menu/router";

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    appBarSpacer: theme.mixins.toolbar,
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
});

const Layout = (props) => {
    const classes = props.classes;

    return (
        <BrowserRouter>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            JS Playground
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent"
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left">
                    <div className={classes.toolbar} />
                    <Divider />
                    <MenuList>
                        <MenuItem component={Link} to="/">
                            <ListItemText primary="Home" />
                        </MenuItem>
                        <MenuItem component={Link} to="/pong">
                            <ListItemText primary="Pong" />
                        </MenuItem>
                        <MenuItem component={Link} to="/canvas-test">
                            <ListItemText primary="Canvas Test" />
                        </MenuItem>
                    </MenuList>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Router />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default withStyles(styles)(Layout);
