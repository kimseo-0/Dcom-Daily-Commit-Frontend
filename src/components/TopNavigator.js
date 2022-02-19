import React from 'react';
import {connect} from "react-redux";
import {AppBar, Box, Typography, Toolbar, Button, Grid, List, ListItemText} from '@mui/material';
import DataObjectIcon from "@mui/icons-material/DataObject";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Offset from "./Offset";
import RefreshIcon from "@mui/icons-material/Refresh";
import RankTable from "./RankTable";


const TopNavigator = ({handleOpen}) => {
    return (
        <AppBar position="fixed"
                color="inherit"
                >
            <Toolbar>
                <Grid container>
                    <Grid item xs={0} md={1}/>
                    <Grid item xs={12} md={10} >
                        <DataObjectIcon
                            color="primary"
                            fontSize="large"
                            sx={{display: {xs: 'flex', sm: 'none', float: "left"}}}/>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            color="primary"
                            sx={{fontFamily:"Anton", display: {xs: 'none', sm: 'flex', float: "left"}}}
                        >
                            D.com Daily Commit
                        </Typography>

                        <Box sx={{ flexGrow: 1 }}/>

                        <Box sx={{float: "right"}}>
                            <Button size="large" color="secondary" href="#top">
                                RULES
                            </Button>
                            <Button size="large" color="secondary" href="#ranking">
                                RANKING
                            </Button>
                            <Button size="large" color="point" variant='text' onClick={handleOpen} endIcon={<PersonAddAltIcon/>}>
                                SIGN UP
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={0} md={10}/>
                </Grid>
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
