import React from 'react';
import {connect} from "react-redux";
import {AppBar, Box, Typography, Toolbar, Button} from '@mui/material';
import DataObjectIcon from "@mui/icons-material/DataObject";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


const TopNavigator = ({addUser, handleClickOpen}) => {
    return (
        <AppBar position="fixed"
                color="inherit"
                sx={{
                    paddingLeft: {xs: 0, md: 14},
                    paddingRight: {xs: 0, md: 14},
        }}>
            <Toolbar>
                <DataObjectIcon
                    color="primary"
                    fontSize="large"
                    sx={{display: {xs: 'flex', sm: 'none'}}}/>
                <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    color="primary"
                    sx={{fontFamily:"Anton", display: {xs: 'none', sm: 'flex'}}}
                >
                    D.com Daily Commit
                </Typography>

                <Box sx={{ flexGrow: 1 }}/>

                <Box>
                    <Button size="large" color="secondary" href="#top">
                        RULES
                    </Button>
                    <Button size="large" color="secondary" href="#ranking">
                        RANKING
                    </Button>
                    <Button size="large" color="primary" variant='text' onClick={handleClickOpen} endIcon={<PersonAddAltIcon/>}>
                        SIGN UP
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

function StateToProps(state){
    return {
        state : state
    }
}

export default connect(StateToProps)(TopNavigator);
