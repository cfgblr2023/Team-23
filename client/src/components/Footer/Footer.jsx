import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer class="footer">
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
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
