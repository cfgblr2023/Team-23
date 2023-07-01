import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
    return (
        <><div className='Paddingsample'></div><footer class="footer">
            <div class="container">
                <div class="row justify-content-evenly">
                    <div class = "col">
                     <p>Phone Number : +91 9008701080</p>
                     </div>
                     <div class = "col">
                     <p>1281, 9th Cross, 1st Main, RK Hegde Nagar, Bengaluru - 560077</p>
                     </div>
                     <div class = "col">
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
