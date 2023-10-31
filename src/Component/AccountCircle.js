import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Modal, Tab, Tabs } from "@mui/material";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import GoogleButton from 'react-google-button'
import { Box } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";
import { auth } from "../firebaseConfig";
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";


const AccountCircle = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider).then((res) => {
            toast.success('Google login successful', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                handleModalClose();
        }).catch((err) => {
            toast.error(errorMapping[err.code] || 'some error occured', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }

    const handleModalOpen = () => {
        if(user){
            navigate('/user');
        }
        else{
            setOpen(true);
        }
    }

    const handleModalClose = () => {
        setOpen(false);
    }

    const handleValueChange = (e, v) => {
        setValue(v)
    }

    const logout = () => {
        auth.signOut().then((res) => {
            toast.success('Logged out', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }).catch((err) => {
            toast.error('not able to logout', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }

    return (
        <div>
            <AccountCircleIcon
                onClick={handleModalOpen}
            />
            {user && <LogoutIcon onClick={logout} />}
            <Modal
                open={open}
                onClose={handleModalClose}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div style={{width: '400px', textAlign: 'center'}}>
                    <AppBar position="static" style={{background: '#081426'}}>
                        <Tabs
                            value={value}
                            onChange={handleValueChange} 
                            variant="fullWidth" 
                        >
                            <Tab style={{color: '#F5DCB6'}}label='login'></Tab>
                            <Tab style={{color: '#F5DCB6'}} label='signup'></Tab>
                        </Tabs>
                    </AppBar>
                    {value === 0 && <LoginForm handleModalClose={handleModalClose} />}
                    {value === 1 && <SignupForm handleModalClose={handleModalClose} />}
                    <Box
                        style={{
                            background: '#081426'
                        }} 
                    >
                        <span>OR</span>
                        <GoogleButton
                            style={{width: '100%', marginTop: '0.5rem'}}
                            onClick={handleGoogleSignIn}
                        />
                    </Box>
                </div>
            </Modal>
        </div>
    )
}

export default AccountCircle;