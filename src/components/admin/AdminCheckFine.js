import React, {Component, useState} from 'react';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import logo from "../../logo192.png";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

const LoginAdmin = ({users}) => {
    const tableRendering = () => {
        const result = [];
        for (let i = 0; i < users.length; i++) {
            let user = users[i]
            if (user.paidFine > 0) {
                result.push(<TableRow key={user.name}>
                    <TableCell component="th" scope="row" align='center' sx={{fontFamily:"NanumGothicRegular"}}>
                        {i + 1}
                    </TableCell>
                    <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>
                        {user.name}
                    </TableCell>
                    <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>
                        {user.paidFine}원
                    </TableCell>
                    <TableCell align="center" sx={{fontFamily:"NanumGothicRegular"}}>
                        {user.unpaidFine}원
                    </TableCell>
                    <TableCell align="right" sx={{fontFamily:"NanumGothicRegular", width: "150px"}}>
                        <TextField id="paidedFine" label="납부 금액" color="secondary" variant="outlined" size="small" sx={{width: "100px"}}/>
                        <IconButton color="point" sx={{marginLeft: 1}}>
                            <PriceCheckIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>)
            }
        }
        return result;
    }

    return (
        <div>
            <TableContainer component={Paper} sx={{clear: "both"}}>
                <Table sx={{ minWidth: 600 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>랭킹</TableCell>
                            <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>프로필</TableCell>
                            <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>낸 벌금</TableCell>
                            <TableCell sx={{fontFamily:"NanumGothicExtraBold"}} align='center'>남은 벌금</TableCell>
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