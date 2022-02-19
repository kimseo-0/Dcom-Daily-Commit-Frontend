import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, Button, IconButton, Typography, Alert, Box, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SignUp = ({open, handleClose, addUser}) => {
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

    const checkSignUpForm = () => {
        if (account.githubId !== "" && account.accessCode !== "" && account.korName !== "" ) {
            addUser(account);
        }
    }

    return (
            <Dialog
                onClose={handleClose}
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2}}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        color="primary"
                        sx={{fontFamily: "Anton", textAlign:'center'}}
                    >
                        Sign Up
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers sx={{padding: 1}}>
                    <Box
                        component="form"
                        sx={{
                            margin: 4,
                            width: {sm : 450},
                        }}
                        noValidate
                        autoComplete="off"
                        maxWidth="sm"
                    >
                        <Alert severity="info" sx={{fontFamily: "Anton"}}>단톡방에서 Acess Code를 확인하세요</Alert>

                        <Box sx={{marginTop:1, marginBottom:4}}>
                            <TextField id="githubId" label="Github Id" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' />
                            <TextField id="accessCode" label="Access Code" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} />
                            <TextField id="korName" label="Name" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} />
                        </Box>

                        {/*<Alert severity="warning" >warning</Alert>*/}
                        <Button onClick={checkSignUpForm} variant="contained" fullWidth>
                            Submit
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
    );
}

export default SignUp;