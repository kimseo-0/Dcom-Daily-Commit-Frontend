import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, Button, IconButton, Typography, Alert, Box, TextField, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SignUp = ({open, handleClose, addUser, addUserLoading}) => {
    const [account, setAccount] = useState({
        githubId: "",
        accessCode: "",
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
                        sx={{ margin: 4, width: {sm : 450}}} >
                        <Alert severity="info" sx={{fontFamily: "Anton"}}>
                            단톡방에서 Acess Code를 확인하세요
                        </Alert>

                        <Box sx={{marginTop:1, marginBottom:4}}>
                            <TextField id="githubId" label="Github Id" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' />
                            <TextField id="accessCode" label="Access Code" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} />
                            <TextField id="korName" label="Name" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} />
                        </Box>

                        <Button onClick={submitForm} variant="contained" fullWidth disabled={addUserLoading}>
                            {addUserLoading ?
                                <CircularProgress color='inherit'/>
                            :
                                "Submit"
                            }
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
    );
}

export default SignUp;