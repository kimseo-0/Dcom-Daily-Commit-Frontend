import React from 'react';
import {connect} from "react-redux";
import {Box, Typography, IconButton, Link} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const BottomNavigator = () => {
    return (
        <Box sx={{
            paddingLeft: {xs: 0, md: 14},
            paddingRight: {xs: 0, md: 14}}}>
            <Box sx={{padding: 4, textAlign: 'center', fontSize: 14}}>
                <Box sx={{padding: 2}}>
                    <Typography sx={{fontSize: 14, fontFamily: 'NanumGothicRegular'}}>
                        사이트에 문제가 있거나 기여하고 싶다면?
                    </Typography>

                    <Link underline="hover" sx={{marginRight: 1, color: 'point.main', fontFamily: 'NanumGothicRegular'}} href="https://github.com/kimseo-0/Dcom-Daily-Commit-Frontend">
                        FrontEnd
                    </Link>
                    |
                    <Link underline="hover" sx={{marginLeft: 1, color: 'point.main', fontFamily: 'NanumGothicRegular'}}  href="https://github.com/BambooKim/DcomDailyCommitBackend">
                        BackEnd
                    </Link>
                </Box>
                <Typography sx={{fontSize: 14, fontFamily: 'NanumGothicRegular'}}>
                    Made by
                    <IconButton sx={{marginLeft: 1}} href="https://github.com/BambooKim/">
                        <GitHubIcon/>
                    </IconButton>
                    <Link underline="hover" sx={{ color: 'secondary.main', fontFamily: 'NanumGothicRegular'}}  href="https://github.com/BambooKim/">
                        BambooKim
                    </Link>
                    <IconButton sx={{marginLeft: 1}} href="https://github.com/kimseo-0/">
                        <GitHubIcon/>
                    </IconButton>
                    <Link underline="hover" sx={{ color: 'secondary.main', fontFamily: 'NanumGothicRegular'}}  href="https://github.com/kimseo-0/">
                        kimseo-0
                    </Link>
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
