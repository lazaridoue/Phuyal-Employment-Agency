import React from 'react';
import './About.css';

const About = () => {
    return (
        <div> 
            <center>
                <h4>This is the About Page</h4> 
                <p className="Text"> We are Phuyal Employment Agency, and we've been matching employees with employers here in Baldwin, PA, since 2020. We strive to build long term partnerships with our clients, learning about organizational needs, projects, personnel, and growth initiatives. Over time, we develop a customized two-sided recruitment methodology. On the one side, we have people of the community wanting to find part-time employment. On the other side, we have employers in need of assistance or requires skills. They allow us to achieve rapid results in matching potential candidates to an organization's requirements unmatched in the industry today. We believe in quick and accurate equal opportunities, access to the workforce, and assisting the community. We are excited to connect skilled people with employers in need of the services.</p>
           </center>
        <div>
        <center>
            <img alt="img" src="/Images/aboutus.png" width="500" height="1000" />
        </center>
        </div>
        </div>
        
    );
};

export default About;