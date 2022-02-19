import React, { Component } from 'react';
import {connect, Provider} from 'react-redux';
import store from "./store";

import './App.css';

import ThemeContainer from "./containers/ThemeContainer";

const App = () => {
  return (
      <Provider store={store}>
        <ThemeContainer/>
      </Provider>
  );
}

function StateToProps(state){
  return {
    state : state
  }
}

export default connect(StateToProps)(App);
