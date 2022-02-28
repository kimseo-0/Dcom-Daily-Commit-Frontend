import React, {useEffect, useState} from 'react';
import {
    Dialog, DialogTitle, DialogContent,
    Button, IconButton, Typography, Alert, Box, TextField, CircularProgress, Checkbox
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Withdrawal = ({info, open, handleClose, deleteUser, deleteUserLoading}) => {
    const [account, setAccount] = useState({
        githubId: "",
        userCode: ""
    });
    const [checked, setChecked] = useState(false);
    const [submitValid, setSubmitValid] = useState(false);
    const [githubIdValid, setGithubIdValid] = useState(true);
    const [userCodeValid, setUserCodeValid] = useState(true);
    const [openInfo, setOpenInfo] = useState(false);

    useEffect(() => {
        if (info.type !== null) {
            setOpenInfo(true)
        } else {
            clearForm();
        }
    },[info]);

    const onChangeAccount = (e) => {
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

        if (account.githubId !==''&& account.userCode !== '') {
            setSubmitValid(true)
        }
        else {
            setSubmitValid(true)
        }
    };

    const onChangeChecked = (e) => {
        setChecked(e.target.checked);
    };

    const submitForm = () => {
        if (submitValid && checked) {
            deleteUser(account);
        }
    }

    const clearForm = () => {
        setAccount({
            githubId: "",
            userCode: ""
        })
        setChecked(false);
        setSubmitValid(false);
        setGithubIdValid(true);
        setUserCodeValid(true);
        setOpenInfo(false);
    }

    return (
            <Dialog onClose={() => {handleClose(); clearForm(); }} open={open} >
                <DialogTitle sx={{ m: 0, p: 2}}>
                    <Typography variant="h5" noWrap component="div" color="error" sx={{fontFamily: "Anton", textAlign:'center'}} >
                        User Delete
                    </Typography>
                    <IconButton onClick={() => {handleClose(); clearForm(); }} disabled={deleteUserLoading} sx={{ position: 'absolute', right: 8, top: 8, color: 'close'}} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Box component="form" noValidate autoComplete="off" maxWidth="sm"
                        sx={{ margin: 4, marginTop: 2, width: {sm : 450}}} >

                        {   openInfo && (info.type !== null) ?
                            <Alert severity="error" variant='outlined' sx={{fontFamily: "Anton", marginTop: 2}} >
                                {info.message}
                            </Alert>
                            :
                            null
                        }

                        <Box sx={{marginBottom:4}}>
                            <TextField required id="githubId" label="GitHub ID" onChange={onChangeAccount} focused={info.focus === "githubId"} error={!githubIdValid || info.focus === "githubId"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' sx={{whiteSpace: 'pre-wrap'}}
                                       helperText={"본인의 github 프로필 URL 속 ID를 입력해주세요. \n ex) URL : github.com/kimseo-0 → ID : kiseo-0"} />
                            <TextField type="password" required id="userCode" label="User Code" onChange={onChangeAccount} value={account.userCode} focused={info.focus === "userCode"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' error={!userCodeValid || info.focus === "userCode"}
                                       helperText="4자리 숫자를 입력해주세요. ex) 1234"/>
                        </Box>

                        <Alert severity="error" variant={checked ? "filled" : "standard"} sx={{fontFamily: "Anton", marginBottom:2, whiteSpace: "pre-wrap"}}
                               action={
                                   <Checkbox color='primary' inputProps={{ 'aria-label': 'controlled' }}
                                             checked={checked} onChange={onChangeChecked} />
                               }
                        >
                            {"사용자 제거 시 모든 정보가 삭제되며 복구할 수 없습니다."}
                        </Alert>

                        <Button onClick={submitForm} variant="contained" fullWidth color='error' disabled={deleteUserLoading || (!submitValid || !userCodeValid) || !checked}
                                sx={{fontFamily:"NanumGothicExtraBold"}}>
                            {deleteUserLoading ?
                                <CircularProgress color='inherit'/>
                                :
                                "사용자 삭제"
                            }
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
    );
}

export default Withdrawal;