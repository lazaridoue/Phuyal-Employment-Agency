import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {  Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import JobPostings from "./Pages/JobPostings";
import PostJob from "./Pages/PostJob";
import FindJob from "./Pages/FindJob";
import Account from "./Pages/Account";
import PageNotFound from "./components/PageNotFound";

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
    history.push("/JobPostings.js");
  };

  return (
  <Router>

    <div className="page-container">
      <div className ="content-wrap">

        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="/">
            <img alt="img" src="/Images/transparent_logo.png" width="80" height="80" className="d-inline-block align-top"/></ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">

          <ReactBootStrap.Nav.Link href="/About">About Us</ReactBootStrap.Nav.Link>

          <ReactBootStrap.Nav.Link href="/JobPostings">Explore</ReactBootStrap.Nav.Link>

          <ReactBootStrap.NavDropdown title="Job Postings" id="collasible-nav-dropdown">

          <ReactBootStrap.NavDropdown.Item href="/FindJob">Find a Job</ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Divider/>
        <ReactBootStrap.NavDropdown.Item href="/PostJob">Post a Job</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>

      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="/Account">Create an Account</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

      <switch>
    <Route path="/" exact component={Home}>
      <Home/>
    </Route> 

    <Route path="/About" component={About}>
      <About/>
     </Route> 

    <Route path="/JobPostings" component={JobPostings}> 
    <JobPostings/>
    </Route>

    <Route path="/FindJob" component={FindJob}> 
    <FindJob/>
    </Route>

    <Route path="/PostJob" component={PostJob}> 
    <PostJob/>
    </Route>

    <Route path="/Account" component={Account}> 
    <Account/>
    </Route>

    <Route path="/NotFound">
      <PageNotFound/>
    </Route>
    </switch>


    <Footer />
    </div> 
    </div>
    </Router>
  
  );
};

export default App;
   