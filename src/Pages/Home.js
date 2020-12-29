import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/public/Images/pexels-photo-313782.jpeg'})`,
      backgroundRepeat: 'no-repeat',
      width:'250px' ,
    },
    style1: {
      fontStyle: 'oblique'
    },
  });

function handleClick() {
    // not working
    // history.push("/Job_Postings.js");
  };

const Home = () => {
    return (
        <div>
        <header className="App-header">
          <center><img alt="img" src="/Images/transparent_logo.png" width="300" height="300" className="d-inline-block align-top"/>
          <Typography variant="h4" gutterBottom className = {useStyles.style1}> Welcome to Phuyel Employment Agency! </Typography> </center>
        </header>
        
        
          <Button fullWidth variant="outlined"  onClick={handleClick}> Explore Jobs </Button>
          <Button fullWidth variant="outlined" > Post Job Openings </Button> 
        </div>
    );
};

export default Home;