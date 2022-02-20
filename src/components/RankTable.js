import React from 'react';
import {Box, Card, Avatar, CircularProgress, IconButton, Typography,
        Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';


const RankTable = ({users, usersLoading}) => {
    return (
        <Box sx={{}}>
            {
                usersLoading ?
                    <Card sx={{padding: 5, textAlign:"center"}}>
                        <CircularProgress sx={{}} color="primary" />
                    </Card>
                        :
                    users === undefined || users.length === 0 ?
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
                                            <IconButton href={"https://github.com/" + user.id} sx={{marginRight: 1}}>
                                                <Avatar alt={user.id} src={user.userImg}
                                                        sx={{border: 1, borderColor: "background.light"}} />
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