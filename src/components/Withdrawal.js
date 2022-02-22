import React, {useEffect, useState} from 'react';
import {
    Dialog, DialogTitle, DialogContent,
    Button, IconButton, Typography, Alert, Box, TextField, CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Withdrawal = ({info, open, handleClose, deleteUser, deleteUserLoading}) => {
    const [account, setAccount] = useState({
        githubId: "",
        userCode: ""
    });
    const [submitValid, setSubmitValid] = useState(false);
    const [userCodeValid, setUserCodeValid] = useState(false);
    const [openInfo, setOpenInfo] = React.useState(false);

    useEffect(() => {
        if (info.type !== null) {
            setOpenInfo(true)
        }
    },[info]);

    const onChangeAccount = (e) => {
        if (e.target.id === 'userCode') {
            if ( e.target.value.length === 4 ) {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value,
                });
                setUserCodeValid(true);
            }
            else if (e.target.value.length < 4) {
                setAccount({
                    ...account,
                    [e.target.id]: e.target.value.replace(/[^0-9]/g, ""),
                });
                setUserCodeValid(false);
            }
            else {
                setUserCodeValid(true);
            }
        } else {
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

    const submitForm = () => {
        if (submitValid) {
            deleteUser(account);
        }
    }

    return (
            <Dialog onClose={handleClose} open={open} >
                <DialogTitle sx={{ m: 0, p: 2}}>
                    <Typography variant="h5" noWrap component="div" color="error"
                        sx={{fontFamily: "Anton", textAlign:'center'}} >
                        User Delete
                    </Typography>
                    <IconButton onClick={handleClose}
                        sx={{ position: 'absolute', right: 8, top: 8, color: 'close'}} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Box component="form" noValidate autoComplete="off" maxWidth="sm"
                        sx={{ margin: 4, marginTop: 2, width: {sm : 450}}} >
                        {   openInfo ?
                            <Alert severity="error" variant='filled' sx={{fontFamily: "Anton", marginTop: 2}} >
                                {info.message}
                            </Alert>
                            :
                            ""
                        }
                        <Box sx={{marginBottom:4}}>
                            <TextField required id="githubId" label="GitHub ID" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' />
                            <TextField required id="userCode" label="User Code" onChange={onChangeAccount} value={account.userCode}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' error={!userCodeValid && account.userCode.length !== 0}
                                       helperText="4자리 숫자를 입력해주세요."/>
                        </Box>

                        <Alert severity="error" sx={{fontFamily: "Anton", marginBottom:2}}>
                            사용자 제거 시 모든 정보가 삭제되며 복구할 수 없습니다.
                        </Alert>

                        <Button onClick={submitForm} variant="contained" fullWidth color='error' disabled={deleteUserLoading || (!submitValid || !userCodeValid)}
                                sx={{fontFamily:"NanumGothicExtraBold"}}>
                            {deleteUserLoading ?
                                <CircularProgress color='inherit'/>
                                :
                                "사용자 제거"
                            }
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
    );
}

export default Withdrawal;