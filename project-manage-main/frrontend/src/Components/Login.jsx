import React from 'react'
import { Link } from 'react-router-dom';
import {TextField,Card,Button } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
// import Image from './images/bg.jpg';
const Login = () => {
  const backgroundImageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Ensure the image stays behind other content
  };
 
  return (
    <div style={{backgroundImage:"url('') ",
 
    }} >
       <img
        src={Image}
        alt="background"
        style={backgroundImageStyle}
      />
     
      <br /><br /><br /><br />
      
      <Card variant="outlined"
       style={{padding:'40px',
       margin:'auto',
       alignContent:'center',
       width:'300px',backgroundColor:'grey',
       border:'0.5px solid black', cursor:'pointer',
       borderRadius:'30px',opacity:'100%',
      
       }}>

      <br /><br /><br />
    
      
      <TextField
        id="input-with-icon-textfield"
        label="Username"
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        style={{cursor:'pointer'}}/>
        <br /><br /><br />

{/* //passwor */}
<TextField
  id="input-with-icon-textfield"
  label="Password"
  type='password'
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <LockIcon />
      </InputAdornment>
    ),
  }}
  variant="standard"
  style={{cursor:'pointer'}}/>

<br /><br /><br />
<Button variant="contained" style={{marginLeft:"30px",backgroundColor:'green'}} color='success'>LOGIN</Button>
<Button variant="contained" style={{ margin: '0 10px' }} color="success">
 <Link to={'/signup'} style={{ textDecoration: 'none', color: 'white' }}>
                signup
              </Link>
            </Button>
</Card>
    </div>
  )
}

export default Login