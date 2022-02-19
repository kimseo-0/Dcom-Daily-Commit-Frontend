import React, {useState} from 'react';
import {
    Dialog, DialogTitle, DialogContent,
    Button, IconButton, Typography, Alert, Box, TextField, CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Withdrawal = ({open, handleClose, deleteUser, deleteUserLoading}) => {
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

    const submitForm = () => {
        if (account.githubId !== "" && account.userCode !== "" ) {
            deleteUser(account);
            handleClose();
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
                        sx={{ position: 'absolute', right: 8, top: 8, color: 'button.main'}} >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Box component="form" noValidate autoComplete="off" maxWidth="sm"
                        sx={{ margin: 4, width: {sm : 450}}} >
                        <Alert severity="error" sx={{fontFamily: "Anton", marginBottom:2}}>
                            삭제시 연속 커밋일 등 모든 정보가 삭제됩니다.
                        </Alert>

                        <Box sx={{marginBottom:4}}>
                            <TextField id="githubId" label="Github Id" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} color='secondary' />
                            <TextField id="userCode" label="User Code" onChange={onChangeAccount}
                                       variant="standard" fullWidth margin={"dense"} />
                        </Box>

                        <Button onClick={submitForm} variant="contained" fullWidth color='error'>
                            {deleteUserLoading ?
                                <CircularProgress color='inherit'/>
                                :
                                "DELETE"
                            }
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
    );
}

export default Withdrawal;