import React, {Component, useEffect} from 'react';
import {connect, Provider} from 'react-redux';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import {createTheme, ThemeProvider} from "@mui/material/styles";
import Main from "./pages/main";
import Admin from "./pages/admin"
import {ADD_USER, CLEAR_INFO, DELETE_USER, FETCH_USERS} from "./reducers/users";

const theme = createTheme({
    palette: {
        primary: {
            main:'#FFFFFF',
        },
        secondary: {
            main: '#25292F',
        },
        background: {
            main: '#FFFFFF',
            dark: '#25292F',
            light:'#eeeeee'
        },
        point: {
            main: '#FD8C73',

        },
        button: {
            main: '#C6C6C6'
        },
        close: {
            main: '#C6C6C6',
        },
        add: {
            main: '#526ab2'
        },
        delete: {
            main: '#db5151'
        }
    },
});

const App = ({users, fetchUsers}) => {
    useEffect(() => {
        fetchUsers()
    },[]);

  return (
      <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <div className="App">
                      <header>
                          <meta name="viewport" content="initial-scale=1, width=device-width" />
                          <title>D.com Daily Commit</title>
                      </header>
                      <Routes>
                          <Route path="/" element={<Main users={users}/>} />
                          <Route path="admin" element={<Admin users={users}/>} />
                      </Routes>
                  </div>
              </BrowserRouter>
          </ThemeProvider>
  );
}

const mapStateToProps = state => ({
    users: state.user.users
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => {
        console.log('fetchUsers')
        dispatch({type : FETCH_USERS})
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
