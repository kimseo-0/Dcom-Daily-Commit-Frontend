import React, {Component, useState} from 'react';
import {Box, Button, Link, TextField, Typography} from "@mui/material";
import logo from "../../logo192.png";

const LoginAdmin = ({loginAdmin}) => {
    const [adminPassword, setAdminPassword] = useState("");

    const onChangeHandler = (e) => {
        setAdminPassword(e.target.value);
    }

    return (
        <div>
            <Box  sx={{display: {padding: 10}}}>
                <Box>
                    <img src={logo} alt="" style={{height: 75, marginTop:2}}/>
                    <Typography variant="h4" noWrap component="div" color="point.main" sx={{fontFamily:"Anton", padding: 1}}  >
                        Admin
                    </Typography>
                </Box>
            </Box>
            <Box sx={{display: {padding: 20}, textAlign: "center"}} >
                <TextField type="password"  required id="password" label="password" onChange={onChangeHandler}
                           variant="standard" fullWidth margin={"dense"} color='secondary' />
                <Button id="loginAdmin" onClick={loginAdmin} variant="outlined" fullWidth color="secondary" sx={{marginTop: 1}}>
                    로그인
                </Button>
            </Box>
            <Box sx={{padding: 2}}>
                <Link underline="hover" onClick={loginAdmin} sx={{marginLeft: 1, color: 'secondary.main', fontFamily: 'NanumGothicRegular'}}  href="/">
                    메인 페이지
                </Link>
            </Box>
        </div>
    );
}

export default LoginAdmin;