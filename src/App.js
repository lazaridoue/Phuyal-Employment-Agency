import React from 'react';
import { Button, Typography } from '@material-ui/core';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { MemoryRouter as Router } from 'react-router';
import { useHistory } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: 'cyan',
    color: props => props.color,
  },
  style1: {
    fontStyle: 'oblique'
  },
});

function App() {
  let history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  function handleClick() {
    history.push("/Job_Postings.js");
  };

  return (
    <div className="App">
      <header className="App-header">
        <center><Typography variant="h2" gutterBottom className = {useStyles.style1}> Welcome to Phuyel Employment Agency! </Typography> </center>
      </header>
        <div>
          <Router>
          <Button fullWidth variant="outlined" color="secondary" onClick={handleClick}> Explore Jobs </Button>
          </Router>
          <Button fullWidth variant="outlined" color="primary"> Post Job Openings </Button>
        </div>
      <BottomNavigation fullWidth value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Facebook" value="Facebook" icon={<FacebookIcon />} />
      <BottomNavigationAction label="Instagram" value="Instagram" icon={<InstagramIcon />} />
      <BottomNavigationAction label="YouTube" value="YouTube" icon={<YouTubeIcon />} />
      <BottomNavigationAction label="Email" value="Email" icon={<EmailIcon />} />
      </BottomNavigation>
    </div>  
  );
};

export default App;