import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Box, Button, Grid, List, ListItemText, Typography, ButtonGroup } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';

import {ADD_USER, DELETE_USER, FETCH_USERS, CLEAR_INFO} from "../reducers/users";

import Offset from "../components/Offset";
import RankTable from "../components/RankTable";
import TopNavigator from "../components/TopNavigator";
import BottomNavigator from "../components/BottomNavigator";
import SignUp from "../components/SignUp";
import Withdrawal from "../components/Withdrawal";
import Info from "../components/Info";

const BodyContainer = ({ info, signUpInfo, deleteUserInfo,users, usersLoading, addUserLoading, deleteUserLoading, fetchUsers, addUser, deleteUser, clearInfo}) => {
    const [openInfo, setOpenInfo] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openDeleteUser, setOpenDeleteUser] = useState(false);
    const IsMobile = useMediaQuery(useTheme().breakpoints.down('sm'))

    useEffect(() => {
        fetchUsers()
    },[]);

    useEffect(() => {
        if (info.type !== null) {
            handleOpen("info")
            if (info.type !== 'error') {
                setOpenSignUp(false);
                setOpenDeleteUser(false);
            }
        }
    },[info]);


    const handleOpen = (type) => {
        if(type === 'SignUp') {
            setOpenSignUp(true);
        } else if(type === 'DeleteUser') {
            setOpenDeleteUser(true);
        } else {
            setOpenInfo(true);
        }
    };

    const handleClose = (type) => {
        if(type === 'SignUp') {
            setOpenSignUp(false);
        } else if(type === 'DeleteUser') {
            setOpenDeleteUser(false);
        } else {
            setOpenInfo(false);
            clearInfo()
        }
    };

    const rules = [
        '?????? ????????? 1??? 1????????? ????????? ?????????.',
        '?????? ????????????/????????????/????????? ??? ?????? ??????????????? ?????? ????????????.',
        '????????? ?????? ??????????????? ???????????? ????????????. ?????? ????????? ???????????????!',
        '?????? ??????????????? ?????? (???-??? ??????), ?????? ?????? ????????? ????????? ?????? 1000??? ?????????.',
        '????????? (?????? ????????? * 10 + ??? ?????? * 5 - ?????? ?????? / 50)??? ??????????????? ???????????????.',
        'Private Repository??? ??????????????? Contribution Setting??? ????????? ????????? ??? ???????????? ???????????????.'
    ];

    return (
        <Box sx={{ width: "auto", height: "auto", backgroundColor: 'background.main' }} >
            <TopNavigator isMobile={IsMobile}/>

            <Offset id='top'/>

            <Grid container sx={{display:"flex"}} >
                <Grid item xs={0} md={1}/>
                <Grid item xs={12} md={10} sx={{padding: 2, backgroundColor: 'background.main'}} >
                    <Box sx={{padding: 2}}>
                        <Typography variant="h4" noWrap component="div" color="secondary" sx={{fontFamily:"Anton"}} >
                            RULES
                        </Typography>
                        <List sx={{fontFamily: 'NanumGothicRegular'}}>
                            {rules.map((rule, index) =>
                                <ListItemText key={index} sx={{textAlign: "left"}} primary={(index + 1) + '. ' + rule}/>
                            )
                            }
                        </List>
                    </Box>

                    <Offset id="ranking"/>

                    <Box sx={{padding: 2}}>
                        <Box sx={{ display: 'block', overflow: "hidden"}}>
                            <Typography variant="h4" noWrap component="div" color="secondary" sx={{fontFamily:"Anton"}} >
                                RANKING
                            </Typography>

                            <Button  color="secondary" variant='text' disableRipple sx={{fontFamily: 'NanumGothicRegular', paddingTop: 2, cursor: 'default' ,'&:hover': {backgroundColor: 'transparent'}, 'background-color': 'transparent', 'transition': "none",}}>
                                ??? ?????? ????????? 5?????????, ????????? ?????? ????????? ???????????? ?????????.
                            </Button>

                            <Box sx={{paddingTop: 2, paddingBottom: 2, display: 'block', overflow: "hidden"}} >
                                <ButtonGroup sx={{float: "right"}} variant='outlined'>
                                    <Button  color="add" variant='outlined' onClick={() => {handleOpen('SignUp')}} sx={{fontFamily: 'NanumGothicBold'}}
                                             endIcon={!IsMobile ? <AddOutlinedIcon/> : null} >
                                        {
                                            !IsMobile
                                                ?
                                                "????????? ??????"
                                                :
                                                <PersonAddAlt1Icon/>
                                        }
                                    </Button>
                                    <Button  color="delete" variant='outlined' onClick={() => {handleOpen('DeleteUser')}} sx={{fontFamily: 'NanumGothicBold'}}
                                             endIcon={!IsMobile ? <RemoveOutlinedIcon/> : null} >
                                        {
                                            !IsMobile
                                                ?
                                                "????????? ??????"
                                                :
                                                <PersonRemoveAlt1Icon/>
                                        }
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </Box>

                        <RankTable users={users} usersLoading={usersLoading}/>
                    </Box>
                </Grid>
                <Grid item xs={0} md={10}/>
            </Grid>

            {info.type !== null ?
                <Info open={openInfo} info={info} handleInfoClose={() => {handleClose('info')}}/>
                : null
            }

            <BottomNavigator/>

            <SignUp info={signUpInfo} open={openSignUp} handleClose={() => {handleClose('SignUp')}} addUser={(data) => {addUser(data)}} addUserLoading={addUserLoading} />
            <Withdrawal info={deleteUserInfo} open={openDeleteUser} handleClose={() => {handleClose('DeleteUser')}} deleteUser={(data) => {deleteUser(data)}} deleteUserLoading={deleteUserLoading} />
        </Box>
    );
};

const mapStateToProps = state => ({
    info : state.user.info,
    signUpInfo : state.user.signUpInfo,
    deleteUserInfo : state.user.deleteUserInfo,
    usersLoading : state.user.usersLoading,
    addUserLoading: state.user.addUserLoading,
    deleteUserLoading: state.user.deleteUserLoading,
    users: state.user.users,
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => {
        console.log('fetchUsers')
        dispatch({type : FETCH_USERS})
    },
    addUser: (data) => {
        console.log('addUsers');
        dispatch({type : ADD_USER, data: data})
    },
    deleteUser: (data) => {
        console.log('deleteUser');
        dispatch({type : DELETE_USER, data: data})
    },
    clearInfo: () => {
        console.log('clearInfo');
        dispatch({type : CLEAR_INFO})
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BodyContainer);