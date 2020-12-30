import React from 'react';
import "./Footer.css"
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';

// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }
  
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
                            <li>Address <initMap/> </li>
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
                     &copy;{new Date().getFullYear()} Phuyal Employment Agency | All rights reserved | Terms of Service | Privacy  
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;