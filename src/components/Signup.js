import React from "react";
import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Typography,} from "@mui/material"; 
import AttributionIcon from '@mui/icons-material/Attribution';
import {Link} from "react-router-dom";


export default function Signup() {
    const paperStyle = {
        height: "100vh",
        width: 310,
        padding: 18,
        margin: "80px auto",
    };
    const avatarStyle = {
        backgroundColor: "#3287db",
    };
    const commonStyle ={
        marginTop: 2,
        marginBottom: 2,
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
                <AttributionIcon />
            </Avatar>
            <h2>Signup</h2>
            </Grid>

            <TextField
            variant="standard"
            label="Username"
            placeholder="Enter your username"
            fullWidth
            required
            style={commonStyle}
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

           <TextField
            variant="standard"
            label="Confirm Password"
            placeholder="Confirm your password"
            type={"password"}
            fullWidth
            required
            style={commonStyle}
            />

            <TextField
            variant="standard"
            label="Firstname"
            placeholder="Enter your firstname"
            fullWidth
            required
            style={commonStyle}
            />

            <TextField
            variant="standard"
            label="Lastname"
            placeholder="Enter your lastname"
            fullWidth
            required
            style={commonStyle}
            />  

            <TextField
            variant="standard"
            label="Date Of Birth"
            placeholder="Enter your D.O.B"
            fullWidth
            required
            style={commonStyle}
            />   

           <TextField
            variant="standard"
            label="Age"
            placeholder="Enter your age"
            fullWidth
            required
            style={commonStyle}
            />

           <TextField
            variant="standard"
            label="Cell number"
            placeholder="Enter your cell number"
            fullWidth
            required
            style={commonStyle}
            />

            <FormControlLabel 
            style={commonStyle2}
            control={<Checkbox defaultChecked />} 
            label="Remember me" /> 

            <Button variant="contained" fullWidth style={commonStyle2}>
                Signup
            </Button>

            <Typography style={commonStyle2}>
              Have an account? <Link to="/">Login here</Link>
            </Typography>
            
            
            </Paper>
        </Grid>

        </>
    );
}

