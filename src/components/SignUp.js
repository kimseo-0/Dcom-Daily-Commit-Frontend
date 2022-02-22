import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, Button, IconButton, Typography, Alert, Box, TextField, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SignUp = ({open, handleClose, addUser, addUserLoading}) => {
    const [account, setAccount] = useState({
        githubId: "",
        accessCode: "",
        userCode: "",
        korName: "",
    });

    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.id]: e.target.value,
        });
    };

    const submitForm = () => {
        if (account.githubId !== "" && account.accessCode !== "" && account.korName !== "" ) {
            addUser(account);
            handleClose();
        }
    }

    return (
            <Dialog onClose={handleClose} open={open} >
                <DialogTitle sx={{ m: 0, p: 2}}>
                    <Typography variant="h5" noWrap component="div" color="secondary"
                        sx={{fontFamily: "Anton", textAlign:'center'}} >
                        Sign Up
                    </Typography>
                    <IconButton onClick={handleClose}
                        sx={{ position: 'absolute', right: 8, top: 8,
                            color: 'button.main' }} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers sx={{padding: 1}}>
                    <Box
                        component="form" noValidate autoComplete="off" maxWidth="sm"
                        sx={{ margin: 4, marginTop: 2, width: {sm : 450}}} >
                        <Alert severity="info" sx={{fontFamily: "Anton"}}>
                            Access Code는 단톡방에서 확인할 수 있으며 <br/>
                            User Code는 암호화 되지 않고 관리자가 볼 수 있습니다.
                        </Alert>

                        <Box sx={{marginTop:1, marginBottom:4}}>
                            <TextField required id="githubId" label="Github Id" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' />
                            <TextField required id="korName" label="Name" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} color='secondary'/>
                            <TextField required id="accessCode" label="Access Code" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} color='secondary'/>
                            <TextField id="userCode" label="User Code" helperText="사용자 제거 시 사용됩니다." onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} color='secondary'/>
                        </Box>

                        <Button onClick={submitForm} variant="contained" fullWidth disabled={addUserLoading} color="success" sx={{fontFamily:"NanumGothicExtraBold"}}>
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