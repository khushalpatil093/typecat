import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { auth } from '../firebaseConfig'
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";

const SignupForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = () => {
        if(!email || !password || !confirmPassword){
            toast.warn('Fill all details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }
        if(password !== confirmPassword){
            toast.warn('Password Mismatch', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }

        auth.createUserWithEmailAndPassword(email, password).then((res) => {
            toast.success('User created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }).catch((err)=> {
            toast.error(errorMapping[err.code] || 'some error occured', {
                position: "top-right",
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
        <Box
            p={3}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                background: '#081426'
            }}
        >
            <TextField
                variant="outlined"
                type="email"
                label="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                    style: {
                        color: '#F5DCB6'
                    }
                }}
                InputProps={{
                    style: {
                        color: '#F5DCB6'
                    }
                }}
            />
            <TextField
                varient="outlined"
                type="password"
                label="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{
                    style: {
                        color: '#F5DCB6'
                    }
                }}
                InputProps={{
                    style: {
                        color: '#F5DCB6'
                    }
                }}
            />
            <TextField
                varient="outlined"
                type="password"
                label="Enter Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                InputLabelProps={{
                    style: {
                        color: '#F5DCB6'
                    }
                }}
                InputProps={{
                    style: {
                        color: '#F5DCB6'
                    }
                }}
            />
            <Button
                style={{background: '#040E1D', color:'#F5DCB6'}}
                variant="contained"
                size="large"
                onClick={handleSubmit}
            >Signup</Button>
        </Box>
    )
}

export default SignupForm;