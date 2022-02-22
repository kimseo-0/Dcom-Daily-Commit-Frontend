import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import BodyContainer from "./BodyContainer";

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

const ThemeContainer = ({}) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <header>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <title>D.com Daily Commit</title>
                </header>

                <BodyContainer/>

            </div>
        </ThemeProvider>
    );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ThemeContainer);