import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history"
import Home from "./Pages/Home";
import About from "./Pages/About";
import JobPostings from "./Pages/JobPostings";
import PostJob from "./Pages/PostJob";
import FindJob from "./Pages/FindJob";
import Account from "./Pages/Account";
import PageNotFound from "./components/PageNotFound";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={Home}><Home/></Route> 
                        <Route path="/About" component={About}><About/></Route> 
                        <Route path="/JobPostings" component={JobPostings}> <JobPostings/></Route>
                        <Route path="/FindJob" component={FindJob}><FindJob/></Route>
                        <Route path="/PostJob" component={PostJob}> <PostJob/></Route>
                        <Route path="/Account" component={Account}> <Account/></Route>
                        <Route path="NotFound"><PageNotFound/></Route>
                    </Switch>
            </Router>
        )
    }
}