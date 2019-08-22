import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';
import Router from "./Menu/router";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
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
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              JS Playground
          </Typography>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
          <div>
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
              </MenuList>
            </Drawer>
            <main className={classes['content']}>
              <div className={classes['appBarSpacer']} />
              <div className={classes.root}>
                <Router />
              </div>
            </main>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
