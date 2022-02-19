import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main:'#276678',
        },
        secondary: {
            main: '#359ca5',
        },
    },
});

const ThemeContainer = ({}) => {
    return (
        <ThemeProvider theme={theme}>

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