import React, { Component } from 'react';
import {connect, Provider} from 'react-redux';
import store from "./store";

import {Button} from '@mui/material';
import logo from './logo.svg';
import './App.css';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';

import BodyContainer from "./containers/BodyContainer";

const theme = createTheme({
  palette: {
    primary: {
      main:'#1A374D',
    },
    secondary: {
      main: '#406882',
    },
    background: {
      main: '#FFFFFF',
      top: '#D8D2CB',
      back: '#EEEEEE'
    },
  },
});

const App = () => {
  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <header>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
              <title>D.com Daily Commit</title>
            </header>

            <BodyContainer/>

          </div>
        </ThemeProvider>
      </Provider>
  );
}

function StateToProps(state){
  return {
    state : state
  }
}

export default connect(StateToProps)(App);
