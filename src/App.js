import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Layout from './Layout/layout';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
