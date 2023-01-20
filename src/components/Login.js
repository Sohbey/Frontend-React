import React from "react";
import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Typography,} from "@mui/material"; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link} from "react-router-dom";

export default function Login() {
    const paperStyle = {
        height: "70vh",
        width: 280,
        padding: 20,
        margin: "20px auto",
    };
    const avatarStyle = {
        backgroundColor: "#3287db",
    };
    const commonStyle ={
        marginTop: 15,
        marginBottom: 15,
    };
    const commonStyle2 ={
        marginTop: 15,
        marginBottom: 5,
    };

    return (
        <>
        <Grid>
            <Paper elevation={7} style ={paperStyle}>
            <Grid align="center">
            <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
            </Avatar>
            <h2>Login</h2>
            </Grid>

            <TextField
            variant="standard"
            label="Username"
            placeholder="Enter your username"
            fullWidth
            required
            />

           <TextField
            variant="standard"
            label="Password"
            placeholder="Enter your password"
            type={"password"}
            fullWidth
            required
            style={commonStyle}
            />
            <FormControlLabel 
            style={commonStyle2}
            control={<Checkbox defaultChecked />} 
            label="Remember me" /> 

            <Button variant="contained" fullWidth style={commonStyle2}>
                Login
            </Button>
            <Typography style={commonStyle2}>
                <Link href="#">Forget Password</Link>
            </Typography>

            <Typography style={commonStyle2}>
              Don't have an account? <Link to='/signup' >Create account first</Link>
            </Typography>

            </Paper>
        </Grid>

        </>
    );
}

