import React, {useState} from 'react';
import {Dialog, DialogTitle, DialogContent, Button, IconButton, Typography, Alert, Box, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Withdrawal = ({open, handleClose, deleteUser}) => {
    const [account, setAccount] = useState({
        githubId: "",
        userCode: ""
    });

    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.id]: e.target.value,
        });
    };

    const checkSignUpForm = () => {
        if (account.githubId !== "" && account.userCode !== "" ) {
            deleteUser(account);
        }
    }

    return (
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2}}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        color="error"
                        sx={{fontFamily: "Anton", textAlign:'center'}}
                    >
                        User Delete
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
                <DialogContent dividers>
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
                        <Alert severity="error" sx={{fontFamily: "Anton", marginBottom:2}}>삭제시 연속 커밋일 등 모든 정보가 삭제됩니다.</Alert>
                        {/*<Alert severity="info" sx={{fontFamily: "Anton"}}>본인의 User Code를 확인하세요</Alert>*/}

                        <Box sx={{marginBottom:4}}>
                            <TextField id="githubId" label="Github Id" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' />
                            <TextField id="userCode" label="User Code" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} />
                        </Box>

                        {/*<Alert severity="warning" >warning</Alert>*/}
                        <Button onClick={checkSignUpForm} variant="contained" fullWidth color='error'>
                            Delete
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
    );
}

export default Withdrawal;