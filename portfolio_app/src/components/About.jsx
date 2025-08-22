import React from 'react';
import { FaInfoCircle, FaLightbulb } from 'react-icons/fa';
import './About.css'; // Optional for styling

function About() {
  return (
    <section id="about" className="about">
      <h1>ABOUT ME</h1>
      <p className="intro">
        Discover my journey, passions, and the story behind my work.
      </p>

      <div className="highlights">
        <div className="cards"><h4><FaInfoCircle /> Who am I</h4></div>
        <div className="cards"><h4><FaLightbulb /> My Approach</h4></div>
        <div className="cards"><h4><FaInfoCircle /> Personal Info:</h4><p><strong>Name:</strong> Kalab Bilhatu</p>
        <p><strong>Place of Birth:</strong> Addis Ababa, Ethiopia</p>
        <p><strong>Phone:</strong> +251 978 600 920</p>
        <p><strong>Date of Birth:</strong> February 2, 2006</p>
        <p><strong>Email:</strong> KAlexkalab@gmail.com</p>
        <p><strong>Education:</strong> Student at Adama Science and Technology University</p>
        </div>
        
        
        
      </div>

  
      <div className="myimgtwo">
        <img src="" alt="Kalab Bilhatu" />
      </div>
    </section>
  );
}

export default About;
