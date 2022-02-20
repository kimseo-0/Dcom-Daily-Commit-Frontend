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
                <Box>
                    <Typography>
                        사이트에 문제가 있거나 기여하고 싶다면?
                    </Typography>
                    FE
                    <IconButton href="https://github.com/kimseo-0/Dcom-Daily-Commit-Frontend">
                        <GitHubIcon/>
                    </IconButton>
                    BE
                    <IconButton href="https://github.com/BambooKim/DcomDailyCommitBackend">
                        <GitHubIcon/>
                    </IconButton>
                </Box>
                <Typography>
                    Made by
                    <IconButton href="https://github.com/BambooKim/">
                        <GitHubIcon/>
                    </IconButton>
                    BambooKim
                    <IconButton href="https://github.com/kimseo-0/">
                        <GitHubIcon/>
                    </IconButton>
                    kimseo-0
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
