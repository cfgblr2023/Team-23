import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
    return (
        <><div className='Paddingsample'></div><footer class="footer">
            <div class="container1">
                <div class="row">
                    <div class="footercol">
                        <h4>About us</h4>
                        <ul>
                            <li>About us</li>
                            <li>Home</li>
                            <li>Causes</li>
                            <li>Events</li>
                            <li>Government Schemes</li>
                        </ul>
                    </div>
                    <div class="footercol">
                        <h4>Vision</h4>
                        <span>
                            This is the vision of the organization
                        </span>
                    </div>
                    <div class="footercol">
                        <h4>Social-links</h4>
                        <div class="social">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer></>
    );
}

export default Footer;
