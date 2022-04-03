import React, {useState} from "react";
import {connect} from "react-redux";
import {Box, Grid, Tabs, Tab, Typography, Button} from '@mui/material';
import logo from "../logo192.png";
import {ADD_USER, CLEAR_INFO, DELETE_USER, FETCH_USERS} from "../reducers/users";

import LoginAdmin from "../components/admin/LoginAdmin"
import AdminCheckFine from "../components/admin/AdminCheckFine"
import AdminUserTable from "../components/admin/AdminUserTable"
import AdminLogTable from "../components/admin/AdminLogTable"
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Admin = ({isLoginAdmin, users}) => {
    const [value, setValue] = React.useState('0');
    const IsMobile = useMediaQuery(useTheme().breakpoints.down('sm'))

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const loginAdmin = () => {

    }

    return (
        <Box>
            {isLoginAdmin ?
                <Grid container sx={{display:"flex"}} >
                    <Grid item xs={0} md={1}/>
                    <Grid item xs={12} md={10} sx={{padding: 2, backgroundColor: 'background.main'}} >
                        <Grid container sx={{paddingLeft: 2, paddingRight: 2}}>
                            <Grid item xs={0} md={1}/>
                            <Grid item xs={12} md={10}>
                                <Box>
                                    {
                                        IsMobile ?
                                            <Tabs variant="fullwidth" value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" sx={{float: "right"}}>
                                                <Tab label="Dashboard" value="0" />
                                                <Tab label="Users" value="1" />
                                                <Tab label="Log" value="2" />
                                            </Tabs>
                                            :
                                            <Box sx={{display: "flex"}}>
                                                <img src={logo} alt="" style={{height: 40, marginTop:2, marginRight: 10, float: "left", display: "inline-block"}}/>
                                                <Typography variant="h5" noWrap component="div" color="point.main" sx={{fontFamily:"Anton", marginTop: 1}}  >
                                                    Admin
                                                </Typography>
                                                <Box sx={{ flexGrow: 1 }}/>
                                                <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" sx={{float: "right"}}>
                                                    <Tab label="Dashboard" value="0" />
                                                    <Tab label="Users" value="1" />
                                                    <Tab label="Log" value="2" />
                                                </Tabs>
                                            </Box>
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={0} md={10}/>
                        </Grid>

                        <Box sx={{marginTop: 2}}>
                            <TabPanel value={value} index="0">
                                <AdminCheckFine users={users}/>
                            </TabPanel>
                            <TabPanel value={value} index="1">
                                <AdminUserTable users={users}/>
                            </TabPanel>
                            <TabPanel value={value} index="2">
                                <AdminLogTable users={users}/>
                            </TabPanel>
                        </Box>
                    </Grid>
                    <Grid item xs={0} md={1}/>
                </Grid>
                :
                <Grid container sx={{display:"flex"}} >
                    <Grid item xs={0} md={4}/>
                    <Grid item xs={12} md={4} sx={{padding: 2, backgroundColor: 'background.main', textAlign: "center"}} >
                        <LoginAdmin loginAdmin={loginAdmin}/>
                    </Grid>
                    <Grid item xs={0} md={4}/>
                </Grid>
            }
        </Box>
    );
};

const mapStateToProps = state => ({
    isLoginAdmin : state.user.isLoginAdmin
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Admin);