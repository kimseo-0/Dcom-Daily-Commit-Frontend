import React, { Component } from 'react';
import {styled } from '@mui/material/styles';

const OffsetComponent = styled('div')(({ theme }) => theme.mixins.toolbar);

const Offset = ({id}) => {
    return (
        <OffsetComponent id={id}/>
    );
}

export default Offset;