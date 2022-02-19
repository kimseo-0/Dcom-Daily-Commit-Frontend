import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import BodyContainer from "./BodyContainer";

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
            back: '#EEEEEE'
        },
        point: {
            main: '#63B4B8'
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