import React from 'react';
import {connect} from "react-redux";
import {AppBar, Box, Typography, Toolbar, Button, Grid, IconButton, Menu, MenuItem} from '@mui/material';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo192.png'


const TopNavigator = ({handleOpen}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleNavOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNavClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed"
                sx={{backgroundColor: 'background.dark', height: 60}}
                >
            <Toolbar>
                <Grid container>
                    <Grid item xs={0} md={1}/>
                    <Grid item xs={12} md={10} sx={{justifyItems: "center"}}>
                        <Box sx={{display: {xs: 'flex', sm: 'none', float: "left", padding: 10}}} >
                            <img src={logo} alt="" style={{height: 32}}/>
                        </Box>
                        <Typography variant="h4" noWrap component="div" color="primary"
                            sx={{fontFamily:"Anton", display: {xs: 'none', sm: 'flex', float: "left"}}}  >
                            D.com Daily Commit
                        </Typography>

                        <Box sx={{ flexGrow: 1 }}/>

                        <Box sx={{float: "right",  display: {xs: 'none', md: 'flex'}}}>
                            <Button size="large" color="primary" href="#top">
                                RULES
                            </Button>
                            <Button size="large" color="primary" href="#ranking">
                                RANKING
                            </Button>
                            <Button size="large" color="point" variant='text' onClick={handleOpen} sx={{fontFamily:"NanumGothicExtraBold"}} endIcon={<PersonAddAltIcon/>}>
                                사용자 등록
                            </Button>
                        </Box>
                        <Box sx={{float: "right", display: {xs: 'flex', md: 'none'}}}>
                            <IconButton size='large' color='primary' onClick={handleNavOpen}>
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={anchorEl}
                                onClose={handleNavClose}
                                onClick={handleNavClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleNavClose}>
                                    <Button size="large" color="secondary" href="#top" disableRipple sx={{
                                        'background-color': 'transparent',
                                        'transition': "none",
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}>
                                    RULES
                                    </Button>
                                </MenuItem>
                                <MenuItem onClick={handleNavClose}>
                                    <Button size="large" color="secondary" href="#ranking" disableRipple sx={{
                                        'background-color': 'transparent',
                                        'transition': "none",
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}>
                                        RANKING
                                    </Button>
                                </MenuItem>
                                <MenuItem onClick={handleNavClose}>
                                    <Button size="large" color="point" variant='text' onClick={handleOpen} endIcon={<PersonAddAltIcon/>} disableRipple sx={{
                                        'background-color': 'transparent',
                                        'transition': "none",
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        },
                                        fontFamily: 'NanumGothicExtraBold'
                                    }}>
                                        사용자 등록
                                    </Button>
                                </MenuItem>
                            </Menu>
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
