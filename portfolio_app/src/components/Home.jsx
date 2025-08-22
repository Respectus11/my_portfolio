import React from 'react';
import { FaGithub, FaLinkedin, FaRocket, FaDownload, FaBolt } from 'react-icons/fa';
import './Home.css'; 
import myimg from "../assets/myimg.jpg";

function Home() {
  return (
    <section id="home" className="home">
      <div className="content">
        <h1>Hi, I'm <span className="name">Kalab Bilahtu</span></h1>
        <h2 className="job">Frontend Developer</h2>
        <p className="intro">
          I build clean, responsive web interfaces that bring ideas to life.
        </p>

        <div className="social">
          <p>Follow me on:</p>
          <a href="https://github.com/Respectus11" target="_blank" >
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/kalab-bilhatu-2b851a373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="actions">
          <button className="btn_one">
            <FaRocket /> Explore My Projects
          </button>
          <button className="btn_two">
            <FaDownload /> Download My CV
          </button>
        </div>

        <div className="status">
          <p><FaBolt /> Quick Status: </p>
          <div className="skills">
              <span className="badge">JavaScript (Main Language)</span>
              <span className="badge">react js (junior)</span>
              <span className="badge">Python</span>
              <span className="badge">C++</span>
              <span className="badge">5 Months Experience</span>
  </div>
        </div>
      </div>
      <div className="myimg">
        <img src={myimg} alt="Kalab Bilahtu" />
      </div>
    </section>
  );
}

export default Home;
