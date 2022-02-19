import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {FETCH_USERS} from "../reducers/users";

import {Box, Card, Avatar, CircularProgress, IconButton, Typography} from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const RankTable = ({users, usersLoading}) => {
    return (
        <Box sx={{}}>
            {
                usersLoading ?
                    <Card sx={{padding: 5, textAlign:"center"}}>
                        <CircularProgress sx={{}} color="primary" />
                    </Card>
                        :
                    users.length === 0 ?
                        <Card sx={{display: 'flex', padding: 5, textAlign:"center"}}>
                            유저가 없습니다.
                        </Card>
                        :
                        <TableContainer component={Paper} sx={{clear: "both"}}>
                            <Table sx={{ minWidth: 600 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>랭킹</TableCell>
                                    <TableCell sx={{fontFamily:"NanumGothicExtraBold", width: 130}} align='center'>프로필</TableCell>
                                    <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>연속 커밋일</TableCell>
                                    <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>참여일</TableCell>
                                    <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>남은 벌금</TableCell>
                                    <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>낸 벌금</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user, index) => (
                                    <TableRow key={user.rank}>
                                        <TableCell component="th" scope="row" align='center'>
                                            {index === 0 ?
                                                'TOP'
                                                :
                                                index + 1

                                            }
                                        </TableCell>
                                        <TableCell align="left">
                                            <IconButton href={"https://github.com/" + user.id} sx={{}}>
                                                <Avatar alt={user.id} src={user.userImg} sx={{border: 1, borderColor: "#dbdbdb"}} />
                                            </IconButton>
                                            <Typography
                                                component="span"
                                                sx={{fontSize: 14}}
                                            >
                                                {user.name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">{user.commitsInARow}일</TableCell>
                                        <TableCell align="center">{user.participationRate}일</TableCell>
                                        <TableCell align="center">{user.unpaidFine}원</TableCell>
                                        <TableCell align="center">{user.paidFine}원</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
            }
        </Box>
    );
}

export default RankTable;