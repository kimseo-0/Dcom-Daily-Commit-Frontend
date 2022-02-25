import React from 'react';
import {
    Box, Card, Avatar, CircularProgress, IconButton, Typography, Link, Chip,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button
} from '@mui/material';

const RankTable = ({users, usersLoading}) => {
    const tableRendering = () => {
        const result = [];
        for (let i =0; i < users.length; i++) {
            let user = users[i]
            result.push(<TableRow key={user.rank}>
                            <TableCell component="th" scope="row" align='center' sx={{fontFamily:"NanumGothicRegular"}}>
                                {i === 0 ?
                                    'TOP'
                                    :
                                    i + 1

                                }
                            </TableCell>
                            <TableCell align="left" sx={{fontFamily:"NanumGothicRegular"}}>
                                <Button color="secondary" variant='text' onClick={() => {window.open("https://github.com/" + user.id)}} sx={{ borderRadius: 6, '&:hover' : {backgroundColor : 'background.light'}}}
                                        startIcon={<Avatar alt={user.id} src={user.userImg} sx={{border:1, borderColor: 'background.light'}} />}>
                                    {user.name}
                                </Button>
                            </TableCell>
                            <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>
                                { user.isCommitToday ?
                                    parseInt(user.commitsInARow) + 1
                                    :
                                    user.commitsInARow
                                }일
                            </TableCell>
                            <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>
                                { user.isCommitToday ?
                                    (parseInt(user.commitDayCount) + 1 )+ '/' + user.elapsedDay
                                    :
                                    user.commitDayCount + '/' + user.elapsedDay
                                } 일
                            </TableCell>
                            <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>
                                {user.unpaidFine}원
                            </TableCell>
                            <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>{user.paidFine}원</TableCell>
                        </TableRow>)
        }
        return result;
    }

    return (
        <Box sx={{}}>
            {
                usersLoading ?
                    <Card sx={{padding: 5, textAlign:"center"}}>
                        <CircularProgress sx={{}} color="secondary" />
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
                                {tableRendering()}
                            </TableBody>
                        </Table>
                        </TableContainer>
            }
        </Box>
    );
}

export default RankTable;