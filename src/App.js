import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar"
import Routes from "./Routes";

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

      <NavigationBar/>
      <Routes/>


    <Footer />
    </div> 
    </div>
    </Router>
  
  );
};

export default App;
   