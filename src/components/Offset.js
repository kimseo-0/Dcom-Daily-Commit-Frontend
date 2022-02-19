import React, { Component } from 'react';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {Avatar, Box, Card, Chip, CircularProgress} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

const OffsetComponent = styled('div')(({ theme }) => theme.mixins.toolbar);

const Offset = ({id}) => {
    return (
        <OffsetComponent id={id}/>
    );
}

export default Offset;