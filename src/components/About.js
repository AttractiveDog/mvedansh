import React from 'react';
import proPic from '../media/download.png';
import '../css/components/About.css';

const About = () => {
    return(
        <section id="about" className="about-section">
            <div className="about-container container to-slide up">
                <div className="about-text">
                    <h3>About me</h3>
                    <p className="about-info">I am from India. I can make any Javascript library's website. And my aim is to give outstanding look to your website. I'm still trying to make myself more better.</p>
                    
                </div>
                <div className="about-photo">
                    <img className="propic" alt="Alberto profile" src={proPic}/>
                </div>
            </div>
        </section>
    );
}

export default About