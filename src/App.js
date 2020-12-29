import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
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
import Footer from "./Components/Footer";

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
    <div className="page-container">
      <div className ="content-wrap">

        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="#home">
            <img alt="img" src="/Images/transparent_logo.png" width="100" height="100" className="d-inline-block align-top"/></ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">

          <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>

          <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>

          <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">

          <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>

          <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>

          <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Divider/>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>

      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">Dank memes </ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

        <header className="App-header">
          <center><img alt="img" src="/Images/transparent_logo.png" width="100" height="100" className="d-inline-block align-top"/>
          <Typography variant="h2" gutterBottom className = {useStyles.style1}> Welcome to Phuyel Employment Agency! </Typography> </center>
        </header> 
      <div>
        <Router>
          <Button fullWidth variant="outlined" color="secondary" onClick={handleClick}> Explore Jobs </Button>
          <Button fullWidth variant="outlined" color="primary"> Post Job Openings </Button>
        </Router>
      </div>

      <div>
        <BottomNavigation value={value} onChange={handleChange} className={classes.style1}>
        <BottomNavigationAction label="Facebook" value="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction label="Instagram" value="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="YouTube" value="YouTube" icon={<YouTubeIcon />} />
        <BottomNavigationAction label="Email" value="Email" icon={<EmailIcon />} />
        </BottomNavigation>
      </div>
      </div>
    <Footer />
    </div>  
  );
};

export default App;