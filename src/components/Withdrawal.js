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
        if (e.target.id === 'userCode') {
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

        if (account.githubId !==''&& account.userCode !== '') {
            setSubmitValid(true)
        } else {
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
    }

    return (
            <Dialog onClose={() => {handleClose(); clearForm(); }} open={open} >
                <DialogTitle sx={{ m: 0, p: 2}}>
                    <Typography variant="h5" noWrap component="div" color="error"
                        sx={{fontFamily: "Anton", textAlign:'center'}} >
                        User Delete
                    </Typography>
                    <IconButton onClick={() => {handleClose(); clearForm(); }}
                        sx={{ position: 'absolute', right: 8, top: 8, color: 'close'}} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Box component="form" noValidate autoComplete="off" maxWidth="sm"
                        sx={{ margin: 4, marginTop: 2, width: {sm : 450}}} >
                        {   openInfo && (info.type !== null) ?
                            <Alert severity="error" variant='filled' sx={{fontFamily: "Anton", marginTop: 2}} >
                                {info.message}
                            </Alert>
                            :
                            null
                        }
                        <Box sx={{marginBottom:4}}>
                            <TextField required id="githubId" label="GitHub ID" onChange={onChangeAccount} focused={info.focus === "githubId"} error={info.focus === "githubId"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' />
                            <TextField required id="userCode" label="User Code" onChange={onChangeAccount} value={account.userCode} focused={info.focus === "userCode"}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' error={!userCodeValid || info.focus === "userCode"}
                                       helperText="4자리 숫자를 입력해주세요."/>
                        </Box>

                        <Alert severity="error" sx={{fontFamily: "Anton", marginBottom:2}}
                               action={
                                   <Checkbox
                                       color='error'
                                       checked={checked}
                                       onChange={onChangeChecked}
                                       inputProps={{ 'aria-label': 'controlled' }}
                                   />
                               }
                        >
                            사용자 제거 시 모든 정보가 삭제되며 복구할 수 없습니다.
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