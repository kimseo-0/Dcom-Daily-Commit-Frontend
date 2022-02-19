import React from 'react';
import {connect} from "react-redux";
import {Box, Typography, IconButton} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const BottomNavigator = () => {
    return (
        <Box sx={{
            paddingLeft: {xs: 0, md: 14},
            paddingRight: {xs: 0, md: 14}}}>
            <Box sx={{padding: 5, textAlign: 'center'}}>
                <IconButton href="https://github.com/BambooKim/DcomDailyCommitBackend">
                    <GitHubIcon/>
                </IconButton>
                BambooKim
                <IconButton href="https://github.com/kimseo-0/Dcom-Daily-Commit-Frontend">
                    <GitHubIcon/>
                </IconButton>
                kimseo-0
                <Typography>
                    Made by D.com
                </Typography>
            </Box>
        </Box>
    );
}

function StateToProps(state){
    return {
        state : state
    }
}

export default connect(StateToProps)(BottomNavigator);
