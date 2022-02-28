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
    const [githubIdValid, setGithubIdValid] = useState(true);
    const [korNameValid, setKorNameValid] = useState(true);
    const [accessCodeValid, setAccessCodeValid] = useState(true);
    const [userCodeValid, setUserCodeValid] = useState(true);
    const [openInfo, setOpenInfo] = React.useState(false);

    useEffect(() => {
        if (info.type !== null) {
            setOpenInfo(true);
            setSubmitValid(false);
        } else {
            clearForm();
        }
    },[info]);

    const onChangeAccount = (e) => {
        setSubmitValid(true);
        const kor_regex = /[^(ㄱ-ㅎ|ㅏ-ㅣ|가-힣)]/;
        const num_regex = /[^0-9]/;
        if (e.target.id === 'githubId') {
            if (e.target.value === "") {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setGithubIdValid(false);
            }
            else {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setGithubIdValid(true);
            }
        }
        if (e.target.id === 'accessCode') {
            if (e.target.value === "") {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setAccessCodeValid(false);
            }
            else {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setAccessCodeValid(true);
            }
        }
        else if (e.target.id === 'korName') {
            if (e.target.value === "") {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setKorNameValid(false);
            }
            else if (kor_regex.test(e.target.value)) {
                setKorNameValid(false);
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
            if (e.target.value === "") {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setUserCodeValid(false);
            }
            else if (num_regex.test(e.target.value)) {
                setUserCodeValid(false);
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
        }
        else {
            setAccount({
                ...account,
                [e.target.id]: e.target.value,
            });
        }

        if (account.githubId !=='' && account.korName !== '' && account.userCode !== '' && account.accessCode !== '') {
            setSubmitValid(true)
        }
        else {
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
        setSubmitValid(false);
        setGithubIdValid(true);
        setKorNameValid(true);
        setUserCodeValid(true);
        setAccessCodeValid(true);
        setOpenInfo(false);
    }

    return (
            <Dialog onClose={() => {handleClose(); clearForm(); }} open={open} >
                <DialogTitle sx={{ m: 0, p: 2}}>
                    <Typography variant="h5" noWrap component="div" color="secondary"
                        sx={{fontFamily: "Anton", textAlign:'center'}} >
                        Sign Up
                    </Typography>
                    <IconButton onClick={() => {handleClose(); clearForm(); }} disabled={addUserLoading}
                        sx={{ position: 'absolute', right: 8, top: 8,
                            color: 'close' }} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers sx={{padding: 1}}>
                    <Box
                        component="form" noValidate autoComplete="off" maxWidth="sm"
                        sx={{ margin: 4, marginTop: 0, marginBottom: 2, width: {sm : 450}}} >
                        <Box sx={{marginTop: 1, marginBottom: 1}}>
                            <TextField required id="githubId" label="GitHub ID" onChange={onChangeAccount} focused={info.focus === "githubId"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' sx={{whiteSpace: 'pre-wrap'}} error={!githubIdValid || info.focus === "korName"}
                                       helperText={"본인의 github 프로필 URL 속 ID를 입력해주세요. \n ex) URL : github.com/kimseo-0 → ID : kiseo-0"} />
                            <TextField required id="korName" label="Name" onChange={onChangeAccount} value={account.korName} focused={info.focus === "korName"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' error={!korNameValid || info.focus === "korName"}
                                       helperText="한글 실명(1- 5자리)을 입력해주세요. ex) 홍길동" />
                        </Box>
                        <Box sx={{marginTop: 1, marginBottom: 2}}>
                            <Alert severity="info" sx={{fontFamily: "Anton"}}>
                                Access Code는 단톡방에서 확인할 수 있습니다.
                            </Alert>
                            <TextField required id="accessCode" label="Access Code" onChange={onChangeAccount} focused={info.focus === "accessCode"} error={!accessCodeValid || info.focus === "korName"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary'/>
                        </Box>
                        <Box sx={{marginTop: 1, marginBottom: 2}}>
                            <Alert severity="info" sx={{fontFamily: "Anton"}}>
                                User Code는 사용자 삭제시 사용됩니다.<br/>
                                User Code는 암호화 되지 않고 관리자가 볼 수 있습니다.
                            </Alert>
                            <TextField type="password" required id="userCode" label="User Code" onChange={onChangeAccount} value={account.userCode} focused={info.focus === "userCode"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' error={!userCodeValid || info.focus === "userCode"}
                                       helperText="4자리 숫자를 입력해주세요. ex) 1234"/>
                        </Box>


                        {   openInfo && (info.type !== null) ?
                            <Alert id="signUpInfo" severity="error" variant='filled' sx={{fontFamily: "Anton", marginTop: 2}} >
                                {info.message}
                            </Alert>
                            :
                            null
                        }

                        <Button id="signUpButton" onClick={submitForm} variant="contained" fullWidth disabled={addUserLoading || (!submitValid || !userCodeValid || !korNameValid || !accessCodeValid || !githubIdValid)}
                                color="success" sx={{fontFamily:"NanumGothicExtraBold", marginTop: 2}}>
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