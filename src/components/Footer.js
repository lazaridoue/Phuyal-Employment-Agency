import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className = "main-footer">
            <div className ="container">
                <div className = "row">
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
                        <h4> Social Media</h4>
                        <ul className ="list-unstyled">
                            <li>Facebook</li>
                            <li>Email</li>
                            <li>Instagram</li>
                        </ul>
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