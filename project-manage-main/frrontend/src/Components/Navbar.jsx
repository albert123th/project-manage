import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar color="grey">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" color="black">
            Restaurant
          </Typography>
          <div>
          <Button variant="contained" style={{ margin: '0 10px' }} color="success">
              <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>
               Home
              </Link>
              </Button>
          <Button variant="contained" style={{ margin: '0 10px' }} color="success">
              <Link to={'/About'} style={{ textDecoration: 'none', color: 'white' }}>
                About
              </Link>
              </Button>

            <Button variant="contained" style={{ margin: '0 10px' }} color="success">
              <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
                LOGIN
              </Link>
            </Button>
           
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
