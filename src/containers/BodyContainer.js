import React, {useCallback, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Box, Button, Grid, List, ListItemText, Typography, Snackbar, Alert, IconButton} from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import CloseIcon from '@mui/icons-material/Close';

import {REFRESH_USERS, ADD_USER, DELETE_USER, FETCH_USERS} from "../reducers/users";

import Offset from "../components/Offset";
import RankTable from "../components/RankTable";
import TopNavigator from "../components/TopNavigator";
import BottomNavigator from "../components/BottomNavigator";
import SignUp from "../components/SignUp";
import Withdrawal from "../components/Withdrawal";
import Info from "../components/Info";

const BodyContainer = ({ info, users, usersLoading, addUserLoading, deleteUserLoading, fetchUsers, refreshUsers, addUser, deleteUser}) => {
    useEffect(() => {
        fetchUsers()
    },[]);

    useEffect(() => {
        if (info.type !== null) {
            handleOpen("info")
        }
    },[info]);

    const [openInfo, setOpenInfo] = React.useState(false);
    const [openSignUp, setOpenSignUp] = React.useState(false);
    const [openDeleteUser, setOpenDeleteUser] = React.useState(false);

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
        }
    };

    return (
        <Box sx={{ width: "auto", height: "auto", backgroundColor: 'background.back' }}>
            <TopNavigator handleOpen={() => {handleOpen('SignUp')}}/>

            <Offset id='top'/>

            <Grid container sx={{display:"flex"}}>
                <Grid item xs={0} md={1}/>
                <Grid item xs={12} md={10} sx={{padding: 2, backgroundColor: 'background.main'}}>
                    <Box sx={{padding: 2}}>
                        <Typography variant="h4" noWrap component="div" color="secondary"
                            sx={{fontFamily:"Anton"}} >
                            RULES
                        </Typography>
                        <List sx={{fontFamily: 'NanumGothicRegular'}}>
                            <ListItemText sx={{textAlign: "left"}} primary="1. 개인 계정에 1일 1커밋을 목표로 합니다."/>
                            <ListItemText sx={{textAlign: "left"}} primary="2. 개인 프로젝트/알고리즘/블로깅 등 어떤 커밋이든지 상관 없습니다."/>
                            <ListItemText sx={{textAlign: "left"}} primary="3. 커밋은 절대 강요하거나 눈치주지 않습니다. 오직 벌금만 강요합니다!"/>
                            <ListItemText sx={{textAlign: "left"}} primary="4. 매주 일요일마다 집계 (일-토 기준), 커밋 한번 빠졌을 때마다 벌금 1,000원 입니다."/>
                            <ListItemText sx={{textAlign: "left"}} primary="5. 귀찮아서/경조사/여행 기타 등등 사유 상관없이 빠지면 벌금입니다. 그냥 맘편하게 내세요!"/>
                        </List>
                    </Box>
                    <Offset id="ranking"/>
                    <Box sx={{padding: 2}}>
                        <Typography variant="h4" noWrap component="div" color="secondary"
                            sx={{fontFamily:"Anton"}} >
                            RANKING
                        </Typography>

                        <Box sx={{paddingTop: 2, paddingBottom: 2, display: 'block', overflow: "hidden", fontFamily: 'NanumGothicRegular'}} >
                            <Button onClick={refreshUsers} variant="outlined" color="success" sx={{float: "left"}}
                                    startIcon={<RefreshIcon/>}>
                                새로고침
                            </Button>
                            <Button  color="error" variant='outlined' sx={{float: "right"}}
                                     onClick={() => {handleOpen('DeleteUser')}}>
                                사용자 제거
                            </Button>
                        </Box>

                        <RankTable users = {users} usersLoading = {usersLoading}/>
                    </Box>
                </Grid>
                <Grid item xs={0} md={10}/>
            </Grid>

            <Info open={openInfo} info={info} handleInfoClose={() => {handleClose('info')}}/>

            <BottomNavigator/>

            <SignUp open={openSignUp} handleClose={() => {handleClose('SignUp')}} addUser={(data) => {addUser(data)}} addUserLoading={addUserLoading} />
            <Withdrawal open={openDeleteUser} handleClose={() => {handleClose('DeleteUser')}} deleteUser={(data) => {deleteUser(data)}} deleteUserLoading={deleteUserLoading} />
        </Box>
    );
};

const mapStateToProps = state => ({
    info : state.user.info,
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
    refreshUsers: () => {
        console.log('refreshUsers');
        dispatch({type : REFRESH_USERS})
    },
    addUser: (data) => {
        console.log('addUsers');
        dispatch({type : ADD_USER, data: data})
    },
    deleteUser: (data) => {
        console.log('deleteUser');
        dispatch({type : DELETE_USER, data: data})
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BodyContainer);