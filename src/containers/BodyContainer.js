import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
    Box,
    Button,
    Grid,
    List,
    ListItemText,
    Typography,
    ButtonGroup,
    IconButton,
    TableRow,
    TableCell, Avatar
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';

import {REFRESH_USERS, ADD_USER, DELETE_USER, FETCH_USERS, CLEAR_INFO} from "../reducers/users";

import Offset from "../components/Offset";
import RankTable from "../components/RankTable";
import TopNavigator from "../components/TopNavigator";
import BottomNavigator from "../components/BottomNavigator";
import SignUp from "../components/SignUp";
import Withdrawal from "../components/Withdrawal";
import Info from "../components/Info";

const BodyContainer = ({ info, signUpInfo, deleteUserInfo,users, usersLoading, addUserLoading, deleteUserLoading, fetchUsers, refreshUsers, addUser, deleteUser, clearInfo}) => {
    const [openInfo, setOpenInfo] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openDeleteUser, setOpenDeleteUser] = useState(false);
    const [updateValid, setUpdateValid] = useState(true);
    const [updateClock, setUpdateClock] = useState(60);
    const IsMobile = useMediaQuery(useTheme().breakpoints.down('sm'))

    const setTimeCookie = () => {
        let todayDate = new Date();
        todayDate.setMinutes(todayDate.getMinutes() + 1);
        document.cookie = "expireTime=" + todayDate + ";"
    }

    const getTimeCookie = () => {
        let result = null;
        let cookie = document.cookie.split(';');
        cookie.some((item) => {
            item = item.replace(' ', '');

            let dic = item.split('=');
            if ("expireTime" === dic[0]) {
                result = dic[1];
                return true;
            }
        });
        return new Date(result);
    }

    useEffect(() => {
        fetchUsers()
        // const now = new Date();
        // const expireTime = getTimeCookie()
        // if ((expireTime !== null) && (now.getTime() < expireTime.getTime())) {
        //     setUpdateValid(false);
        //     setUpdateClock((expireTime.getTime() - now.getTime()) * 60);
        // } else {
        //     setUpdateValid(true);
        // }
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

    const updateTable = () => {
        const now = new Date();
        const expireTime = getTimeCookie()
        if ((expireTime === null) || (now.getTime() > expireTime.getTime())) {
            setTimeCookie()
            refreshUsers();
            setUpdateValid(false);
            setInterval(() =>
            {
                setUpdateClock(updateTimer(updateClock));
                console.log(updateClock);
            }, 1000 );
        }
    }

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

    const updateTimer = (clock) => {
        if (clock === 0) {
            setUpdateValid(true);
            // setUpdateClock(60);
            return 60
        } else {
            setUpdateValid(false);
            // setUpdateClock(clock - 1);
            return clock - 1
        }
    }

    const rules = [
        '개인 계정에 1일 1커밋을 목표로 합니다.',
        '개인 프로젝트/알고리즘/블로깅 등 어떤 커밋이든지 상관 없습니다.',
        '커밋은 절대 강요하거나 눈치주지 않습니다. 오직 벌금만 강요합니다!',
        '매주 일요일마다 집계 (일-토 기준), 커밋 한번 빠졌을 때마다 벌금 1000원 입니다.',
        '랭킹은 (연속 커밋일 * 10 + 총 커밋 * 5 - 남은 벌금 / 50)의 계산식으로 정해집니다.',
        'Private Repository에 커밋했다면 Contribution Setting을 바꾸어 주어야 본 페이지에 반영됩니다.'
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
                        <Typography variant="h4" noWrap component="div" color="secondary" sx={{fontFamily:"Anton"}} >
                            RANKING
                        </Typography>

                        <Box sx={{paddingTop: 2, paddingBottom: 2, display: 'block', overflow: "hidden"}} >
                            <Button onClick={updateTable} disabled={!updateValid} variant="outlined" color="success" sx={{float: "left", fontFamily: 'NanumGothicBold'}}
                                    startIcon={!IsMobile ? <RefreshIcon/> : null} >
                                {
                                    !updateValid
                                    ?
                                        updateClock
                                    :
                                        !IsMobile
                                            ?
                                            "업데이트"
                                            :
                                            <RefreshIcon/>
                                }
                            </Button>
                            <ButtonGroup sx={{float: "right"}} variant='outlined'>
                                {
                                    !IsMobile
                                        ?
                                        <Button color="add" variant='outlined' onClick={() => {handleOpen('SignUp')}} sx={{fontFamily: 'NanumGothicBold'}} endIcon={<AddOutlinedIcon/>}>
                                            사용자 등록
                                        </Button>
                                        :
                                        <Button color="add" variant='outlined' onClick={() => {handleOpen('SignUp')}} sx={{fontFamily: 'NanumGothicBold'}}>
                                            <PersonAddAlt1Icon/>
                                        </Button>
                                }
                                {
                                    !IsMobile
                                        ?
                                        <Button  color="delete" variant='outlined' onClick={() => {handleOpen('DeleteUser')}} sx={{fontFamily: 'NanumGothicBold'}} endIcon={<RemoveOutlinedIcon/>} >
                                            사용자 제거
                                        </Button>
                                        :
                                        <Button  color="delete" variant='outlined' onClick={() => {handleOpen('DeleteUser')}} sx={{fontFamily: 'NanumGothicBold'}} >
                                            <PersonRemoveAlt1Icon/>
                                        </Button>
                                }
                            </ButtonGroup>
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