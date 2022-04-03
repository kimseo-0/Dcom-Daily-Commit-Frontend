import React, {Component, useState} from 'react';
import {
    Alert,
    Avatar, Box,
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import logo from "../../logo192.png";

const LoginAdmin = ({users}) => {
    const tableRendering = () => {
        const result = [];
        for (let i = 0; i < users.length; i++) {
            let user = users[i]
            result.push(<TableRow key={user.name}>
                <TableCell component="th" scope="row" align='center' sx={{fontFamily:"NanumGothicRegular"}}>
                    {i + 1}
                </TableCell>
                <TableCell align="left" sx={{fontFamily:"NanumGothicRegular"}}>
                    {user.name}
                </TableCell>
                <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>
                    {user.unpaidFine}원
                </TableCell>
                <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>{user.paidFine}원</TableCell>
                <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>

                </TableCell>
            </TableRow>)
        }
        return result;
    }

    return (
        <div>
            <TableContainer component={Paper} sx={{clear: "both"}}>
                <Table sx={{ minWidth: 600 }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>랭킹</TableCell>
                            <TableCell sx={{fontFamily:"NanumGothicExtraBold", width: 130}} align='center'>프로필</TableCell>
                            <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>남은 벌금</TableCell>
                            <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>낸 벌금</TableCell>
                            <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRendering()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default LoginAdmin;