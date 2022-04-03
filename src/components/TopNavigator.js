import React, {useState} from 'react';
import {AppBar, Box, Typography, Toolbar, Button, Grid, IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo192.png'

const TopNavigator = ({isMobile}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <AppBar position="fixed"
                sx={{backgroundColor: 'background.dark', height: 60}}
                >
            <Toolbar sx={{height: '100%'}}>
                <Grid container>
                    <Grid item xs={0} md={1}/>
                    <Grid item xs={12} md={10} sx={{justifyItems: "center"}}>
                        <Box>
                            {
                                isMobile ?
                                    <Box sx={{display: {float: "left", padding: 10}}} >
                                        <img src={logo} alt="" style={{height: 30, marginTop:2}}/>
                                    </Box>
                                    :
                                    <Typography variant="h4" noWrap component="div" color="primary" sx={{fontFamily:"Anton", padding: 1, display: {float: "left"}}}  >
                                        D.com Daily Commit
                                    </Typography>
                            }
                        </Box>

                        <Box sx={{ flexGrow: 1 }}/>

                        <Box sx={{float: "right",  padding: 1, display: {xs: 'none', md: 'flex'}}}>
                            <Button size="large" color="primary" href="#top">
                                RULES
                            </Button>
                            <Button size="large" color="primary" href="#ranking">
                                RANKING
                            </Button>
                        </Box>
                        <Box sx={{float: "right", display: {xs: 'flex', md: 'none'}}}>
                            <IconButton size='large' color='primary' onClick={handleMenuOpen} sx={{padding: 2}}>
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl} id="account-menu"
                                open={open} onClose={handleMenuClose} onClick={handleMenuClose}
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
                                            backgroundColor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleMenuClose}>
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
                                <MenuItem onClick={handleMenuClose}>
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
                            </Menu>
                        </Box>

                    </Grid>
                    <Grid item xs={0} md={10}/>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default TopNavigator;
