import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {Box, Button, ButtonGroup, Avatar, Chip, Link, Typography} from '@mui/material';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {fetchRank} from "../reducers/rank";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
        border: 0
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Rank = ({users, onUpdateRank, onDeleteRank, onFetchRank}) => {
    return (
        <div>
            <Box sx={{paddingTop: 2, paddingBottom: 2, display: "block", overflow: "hidden"}}>
                <Button variant="outlined" color="secondary"  onClick={onUpdateRank} sx={{float: "left"}}>새로고침</Button>
                <Box sx={{float: "right"}}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button  color="secondary" onClick={onFetchRank}>사용자 등록</Button>
                        <Button  color="secondary" onClick={onDeleteRank}>제거</Button>
                    </ButtonGroup>
                </Box>
            </Box>

            <TableContainer component={Paper} sx={{clear: "both"}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>랭킹</StyledTableCell>
                            <StyledTableCell align='center'>프로필</StyledTableCell>
                            <StyledTableCell align='center'>연속 커밋일</StyledTableCell>
                            <StyledTableCell align='center'>참여일</StyledTableCell>
                            <StyledTableCell align='center'>남은 벌금</StyledTableCell>
                            <StyledTableCell align='center'>낸 벌금</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <StyledTableRow key={user.rank}>
                                <StyledTableCell component="th" scope="row" align='center'>
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Chip
                                        avatar={<Avatar alt={user.id} src={user.userImg} sx={{border: 1, borderColor: "#dbdbdb"}} />}
                                        label={user.name}
                                        size={'large'}
                                        sx={{background: "none"}}
                                    />
                                    {/*<Avatar alt={user.id} src={user.userImg} sx={{display: "inline-block"}}/>*/}
                                    {/*<Typography variant="h7" sx={{display: "inline-block", alignItems: "center", }}>{user.name}</Typography>*/}
                                </StyledTableCell>
                                <StyledTableCell align="center">{user.commitsInARow}일</StyledTableCell>
                                <StyledTableCell align="center">{user.participationRate}일</StyledTableCell>
                                <StyledTableCell align="center">{user.unpaidFine}원</StyledTableCell>
                                <StyledTableCell align="center">{user.paidFine}원</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Rank;