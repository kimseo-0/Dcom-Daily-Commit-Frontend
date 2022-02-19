import React, {useEffect, useState} from 'react';
import {
    Box, Card, Avatar, CircularProgress, IconButton, Typography,
    Table, TableBody, TableCell, TableContainer, TableHead, Collapse, Alert, Snackbar
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Info = ({open, info, handleInfoClose}) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={2500}
            onClose={handleInfoClose}
        >
            <Alert severity={info.type} sx={{ width: '100%' }} variant="filled"
                   action={
                       <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleInfoClose}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>}
            >
                {info.message}
            </Alert>
        </Snackbar>
    );
}

export default Info;