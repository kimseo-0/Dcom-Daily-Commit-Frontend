import React, {useEffect, useState} from 'react';
import {Dialog, DialogTitle, DialogContent, Button, IconButton, Typography, Alert, Box, TextField, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SignUp = ({info, open, handleClose, addUser, addUserLoading}) => {
    const [account, setAccount] = useState({
        githubId: "",
        accessCode: "",
        userCode: "",
        korName: "",
    });
    const [submitValid, setSubmitValid] = useState(false);
    const [korNameValid, setKorNameValid] = useState(true);
    const [userCodeValid, setUserCodeValid] = useState(true);
    const [openInfo, setOpenInfo] = React.useState(false);

    useEffect(() => {
        if (info.type !== null) {
            setOpenInfo(true)
        } else {
            clearForm();
        }
    },[info]);

    const onChangeAccount = (e) => {
        const kor_regex = /[^(ㄱ-ㅎ|ㅏ-ㅣ|가-힣)]/;
        const num_regex = /[^0-9]/;
        if (e.target.id === 'korName') {
            if (kor_regex.test(e.target.value)) {
                setKorNameValid(false);
            }
            else if (e.target.value.length === 0) {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setKorNameValid(true);
            }
            else if ( e.target.value.length >= 1 && e.target.value.length <= 5 ) {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setKorNameValid(true);
            }
            else {
                setKorNameValid(false);
            }
        }
        else if (e.target.id === 'userCode') {
            if (num_regex.test(e.target.value)) {
                setUserCodeValid(false);
            }
            else if (e.target.value.length === 0) {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setUserCodeValid(true);
            }
            else if ( e.target.value.length === 4 ) {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setUserCodeValid(true);
            }
            else if (e.target.value.length < 4) {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setUserCodeValid(false);
            }
            else {
                setUserCodeValid(false);
            }
        }
        else {
            setAccount({
                ...account,
                [e.target.id]: e.target.value,
            });
        }

        if (account.githubId !=='' && account.korName !== '' && account.userCode !== '' && account.accessCode !== '') {
            setSubmitValid(true)
        } else {
            setSubmitValid(false)
        }
    };

    const submitForm = () => {
        if (submitValid) {
            addUser(account);
        }
    }

    const clearForm = () => {
        setAccount({
            githubId: "",
            accessCode: "",
            userCode: "",
            korName: "",
        })
    }

    return (
            <Dialog onClose={() => {handleClose(); clearForm(); }} open={open} >
                <DialogTitle sx={{ m: 0, p: 2}}>
                    <Typography variant="h5" noWrap component="div" color="secondary"
                        sx={{fontFamily: "Anton", textAlign:'center'}} >
                        Sign Up
                    </Typography>
                    <IconButton onClick={() => {handleClose(); clearForm(); }}
                        sx={{ position: 'absolute', right: 8, top: 8,
                            color: 'close' }} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers sx={{padding: 1}}>
                    <Box
                        component="form" noValidate autoComplete="off" maxWidth="sm"
                        sx={{ margin: 4, marginTop: 0, marginBottom: 2, width: {sm : 450}}} >
                        {   openInfo && (info.type !== null) ?
                            <Alert severity="error" variant='filled' sx={{fontFamily: "Anton", marginTop: 2}} >
                                {info.message}
                            </Alert>
                            :
                            null
                        }
                        <Box sx={{marginTop: 1, marginBottom: 1}}>
                            <TextField required id="githubId" label="GitHub ID" onChange={onChangeAccount} focused={info.focus === "githubId"} error={info.focus === "githubId"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' />
                            <TextField required id="korName" label="Name" onChange={onChangeAccount} value={account.korName} focused={info.focus === "korName"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' error={!korNameValid || info.focus === "korName"}
                                       helperText="한글 실명(1- 5자리)을 입력해주세요. ex) 홍길동" />
                        </Box>
                        <Box sx={{marginTop: 1, marginBottom: 2}}>
                            <Alert severity="info" sx={{fontFamily: "Anton"}}>
                                Access Code는 단톡방에서 확인할 수 있습니다.
                            </Alert>
                            <TextField required id="accessCode" label="Access Code" onChange={onChangeAccount} focused={info.focus === "accessCode"} error={info.focus === "accessCode"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary'/>
                        </Box>
                        <Box sx={{marginTop: 1, marginBottom: 2}}>
                            <Alert severity="info" sx={{fontFamily: "Anton"}}>
                                User Code는 사용자 삭제시 사용됩니다.<br/>
                                User Code는 암호화 되지 않고 관리자가 볼 수 있습니다.
                            </Alert>
                            <TextField required id="userCode" label="User Code" onChange={onChangeAccount} value={account.userCode} focused={info.focus === "userCode"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' error={!userCodeValid || info.focus === "userCode"}
                                       helperText="4자리 숫자를 입력해주세요. ex) 1234"/>
                        </Box>

                        <Button onClick={submitForm} variant="contained" fullWidth disabled={addUserLoading || (!submitValid || !userCodeValid)}
                                color="success" sx={{fontFamily:"NanumGothicExtraBold"}}>
                                {addUserLoading ?
                                    <CircularProgress color='inherit'/>
                                :
                                    "사용자 등록"
                                }
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
    );
}

export default SignUp;