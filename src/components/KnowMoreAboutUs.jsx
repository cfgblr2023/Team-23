import React from 'react';
import Navbar from './Navbar';
import './KnowMoreAboutUs.css';

function KnowMoreAboutUs() {
    return (
        <div>
            <Navbar />
            <div className='container1'>
                <img
                    className="main-image"
                    src="https://lampeducationtrust.com/wp-content/uploads/2022/08/aubergine-e1611195670454.jpg"
                    alt="charity"
                />
                <div className="centered">ABOUT US</div>
            </div>
            <div className="container2">
                <div className="col">
                    <div className="row1">
                        <div className='col1'>
                            <img
                                className="small-image"
                                src="https://lampeducationtrust.com/wp-content/uploads/2022/08/aubergine-e1611195670454.jpg"
                                alt="charity"
                            />
                        </div>
                        <div className='col1'>
                            <p className="heading1">WE ARE IN A MISSION TO HELP THE HELPLESS</p>
                            <p id='writing'>We are focusing on a free online coaching site for needy and downtrodden students all over India. Today, everyone uses a smartphone, and it will be easy for a student to learn from a mobile-responsive site. We also focus on people who want to learn state languages. We need volunteers to make this free online mobile-responsive site go live and uplift many lives from poverty.</p>
                        </div>
                    </div>
                    <div className="row1">
                        <div className='col1'>
                            <p className="heading">Free Study Center</p>
                            <p id='writing'>Underprivileged students can benefit by taking free tuition on school and college subjects and languages without paying extra money to the paid tuition centers.</p>
                        </div>
                        <div className='col1'>
                            <img
                                className="small-image"
                                src="https://lampeducationtrust.com/wp-content/uploads/2022/08/aubergine-e1611195670454.jpg"
                                alt="charity"
                            />
                        </div>
                    </div>
                    <div className="row1">
                        <div className='col1'>
                            <img
                                className="small-image"
                                src="https://lampeducationtrust.com/wp-content/uploads/2022/08/aubergine-e1611195670454.jpg"
                                alt="charity"
                            />
                        </div>
                        <div className='col1'>
                            <p className="heading">Skill Training</p>
                            <p id='writing'>Empowering women to create their businesses by conducting tailoring classes, beauticians, digital marketing, paper bag making, and many more, based on their skills and experience.</p>
                        </div>
                    </div>
                    <div className="row1">
                        <div className='col1'>
                            <p className="heading">Online Schooling</p>
                            <p id='writing'>The only idea behind all this is schooling children, whether at home or at school. And as far as the educational needs of children are fulfilled, there is no issue with homeschooling as well.</p>
                        </div>
                        <div className='col1'>
                            <img
                                className="small-image"
                                src="https://lampeducationtrust.com/wp-content/uploads/2022/08/aubergine-e1611195670454.jpg"
                                alt="charity"
                            />
                        </div>
                    </div>
                    <div className="row1">
                        <div className='col1'>
                            <img
                                className="small-image"
                                src="https://lampeducationtrust.com/wp-content/uploads/2022/08/aubergine-e1611195670454.jpg"
                                alt="charity"
                            />
                        </div>
                        <div className='col1'>
                            <p className="heading">Proper Education</p>
                            <p id='writing'>Education is the best tool to end poverty. We want every student in the nation to learn how to catch their fish instead of begging for a fish.</p>
                        </div>
                    </div>
                    <div className='row1'>
                        <p className="heading1">ABOUT OUR NGO</p>
                        <p id='writing1'>We make a difference in the lives of people during a very traumatic time in their life. Meeting their education needs eases their burden.</p>
                        <p id='writing2'>
                            <br /><br /><h5 className='smallheadings'>Straightforwardness:</h5>
                            Lamp Educational and Charitable Trust guarantees total transparency in all of our endeavors and functions with internal as well as external stakeholders of the organization.
                            <br /><h5 className='smallheadings'>Respect:</h5>
                            Lamp Educational and Charitable Trust ensures respect towards every individual and their views and feelings, irrespective of their caste, belief, gender, or color.
                            <br /><h5 className='smallheadings'>Integrity:</h5>
                            Lamp Educational and Charitable Trust works with integrity and ensures the dignity of all those involved in our projects. To comply with all laws, rules, and regulations imposed as part of an organization.
                            <br /><h5 className='smallheadings'>Compassion:</h5>
                            To be compassionate to all those associated with Lamp Educational and Charitable Trust and ensure a high sense of understanding of the feelings of all our stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KnowMoreAboutUs;
