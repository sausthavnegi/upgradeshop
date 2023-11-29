import React, { useState } from "react";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { TextField, Button, Typography, Avatar } from '@mui/material';
import './login_style.css';
import { useNavigate, useNavigation } from "react-router-dom";
import {loginPromise} from "./auth";
import Navbar from "../../common/NavigationBar/navbar";
import { ReportGmailerrorred } from "@mui/icons-material";

function Login({ setIsLoggedIn, setIsAdmin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Perform your login logic here with the email and password state values
        console.log("Email:", email);
        console.log("Password:", password);
        try{
            
            const user= await loginPromise(email,password);
            setIsLoggedIn(true)
            if(email.match("admin@gmail.com")){
        
                setIsAdmin(true)
            }  
            else{
                setIsAdmin(false)
            }
            
            navigate("/product")

        }catch(error){
            alert(`Error : ${error.message}`);
            console.error(error.message);
        }
    };
    return (

        <>
        <div className="form_style">
            <Avatar sx={{ bgcolor: "red", margin: "auto" }}>
                <LockRoundedIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" gutterBottom sx={{ padding: "1%" }}>
                Sign in
            </Typography>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: 16, width: '100%' }}>
                    <TextField
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        aria-label="Email Address"
                    />
                </div>
                <div style={{ marginBottom: 16, width: '100%' }}>
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        fullWidth
                    />
                </div>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
        </div>

        </>
    );
    
}

export default Login;
