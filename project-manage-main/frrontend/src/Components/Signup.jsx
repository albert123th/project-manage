import React ,{useState}from 'react'
import {TextField,Card,Button } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
export const Signup = () => {
  var[inputs,setInputs] = useState({
    email:"",
    phNo:"",
    username:"",
    password:"",
    
})

 
  const inputHandler = (e)=>{
    const {name,value}=e.target
    setInputs((prevData)=>({...prevData,[name]:value}))
    console.log(inputs)
 }
 const addHandler = ()=>{
  console.log(inputs.email)
  console.log("button clicked");
  axios.post("http://localhost:6969/add",inputs)
  .then((result)=>{
    console.log(result.data)
    alert(result.data)
   
  })
  .catch((err)=>console.log(err))
 }
  return (
    <div>

<br /><br /><br /><br />
      
<Card variant="outlined"
       style={{padding:'40px',
       margin:'auto',
       alignContent:'center',
       width:'300px',backgroundColor:'none',
       border:'2px solid black', cursor:'pointer',
       borderRadius:'30px'
       }}>

<TextField
        id="input-with-icon-textfield"
        label="Email"
        type='email'
        name='email'
        value={inputs.email}
        onChange={inputHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
     style={{cursor:'pointer'}} />
      <br /><br /><br />
      <TextField
        id="input-with-icon-textfield"
        label="Ph.no"
        type='number'
        name='phNo'
        value={inputs.phNo}
        onChange={inputHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              < ContactPhoneIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
        style={{cursor:'pointer'}} />
      <br /><br /><br />
      <TextField
        id="input-with-icon-textfield"
        label="Username"
        name='username'
        value={inputs.username}
        onChange={inputHandler}
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
  name='password'
  value={inputs.password}
  onChange={inputHandler}
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
<Button variant="contained" style={{marginLeft:"30px",backgroundColor:'green'}} color='success' onClick={addHandler}>SIGN-UP</Button>
</Card>
    </div>
  )
}