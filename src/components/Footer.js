import React from 'react';
import "./Footer.css"
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
        <div className = "main-footer">
            <div className ="container">
                <div className = "row align-items-center">
                    {/* {Column1} */}
                    <div className="col">
                        <h4> Phuyal Employment Agency</h4>
                        <ul className ="list-unstyled">
                            <li>Phone Number</li>
                            <li>Location</li>
                            <li>Address</li>
                        </ul>
                    </div>
                    {/* {Column2} */}
                    <div className="col">
                        <h4> More Info</h4>
                        <ul className ="list-unstyled">
                            <li>About Us</li>
                            <li>Job Listings</li>
                            <li>Post Jobs</li>
                        </ul>
                    </div>
                    {/* {Column3} */}
                    <div className="col">
                        <h4 align="center">Social Media</h4>
                        <div className = "row justify-content-md-center">
                        <div className="col col-lg-2">
                        <ul className ="list-unstyled">
                            <li><IconButton label="Facebook" value="Facebook" href="www.google.com"><FacebookIcon /></IconButton></li>
                            <li><IconButton label="Instagram" value="Instagram"><InstagramIcon /></IconButton></li>
                        </ul>
                        </div>
                        <div className="col col-lg-2">
                        <ul className ="list-unstyled">
                            <li><IconButton label="YouTube" value="YouTube"><YouTubeIcon /></IconButton></li>
                            <li><IconButton label="Email" value="Email"><EmailIcon /></IconButton></li>
                        </ul>
                    </div></div>

                    <div className="col">

                    </div>    
                    </div>
                </div>
                <div className = "row">
                    <p className="col-sm">
                     &copy;{new Date().getFullYear()} Phuyal Employment Agency | All rights reserves | Terms of Service | Privacy  
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;