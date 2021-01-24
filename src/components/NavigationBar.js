import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";

export default class NavigationBar extends Component {
    render() {
        return (
            <div>
            <ReactBootStrap.Navbar className="color-nav" collapseOnSelect expand="sm" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="/"><img alt="img" src="/Images/transparent_logo.png" width="80" height="80" className="d-inline-block align-top"/></ReactBootStrap.Navbar.Brand>
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
            </div>
        )
    }
}
