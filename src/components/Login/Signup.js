import React, { useState } from "react";
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { TextField, Button, Typography, Avatar } from '@mui/material';
import './login_style.css'
import { useNavigate } from "react-router-dom";
import { FitScreen } from "@mui/icons-material";
import Navbar from "../../common/NavigationBar/navbar";

function Signup() {
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [contactNumber, setcontactnumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const params = {
      firstName, lastName, email, password, contactNumber
    };

    try {
    
    
      const rawResponse = await fetch('http://localhost:8080/api/auth/signup', {
        body: JSON.stringify(params),
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params),
      });
      const result = await rawResponse.json();

      if (rawResponse.ok) {
        navigate("/login");
      } else {
        const error = new Error();
        error.message = result.message || 'Something went wrong.';
        console.error(error.message);
      }

    } catch (e) {
      alert(`Erorr:${e.message}`);
      console.error(`Error: ${e.message}`);
    }
  };

  return (
    <>
  
    <div className="form_style">
      <Avatar sx={{ bgcolor: 'red', margin: 'auto' }} >
        <LockRoundedIcon fontSize="large" />
      </Avatar>
      <Typography variant="h5" gutterBottom  >
        Sign up
      </Typography>
      <form onSubmit={handleLogin} >
        <div style={{ marginBottom: 16 }}>
          <TextField
            label="First Name"
            type="text"
            fullWidth
            variant="outlined"
            value={firstName}
            onChange={(e) => setfirstname(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <TextField
            label="Last Name"
            type="text"
            fullWidth
            variant="outlined"
            value={lastName}
            onChange={(e) => setlastname(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <TextField
            label="Confirm"
            type="text"
            fullWidth
            variant="outlined"
            value={confirmpassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
            required
          />
          <div style={{ marginBottom: 14, paddingTop: 10 }}>
            <TextField
              label="Contact Number"
              type="tel"
              fullWidth
              variant="outlined"
              value={contactNumber}
              onChange={(e) => setcontactnumber(e.target.value)}
              required
            />
          </div>
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth >
          Sign up
        </Button>
      </form>

    </div>
    </>
  );
}

export default Signup;
