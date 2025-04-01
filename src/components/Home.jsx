import React from 'react';
import './Home.css';
import linkedinIcon from '../assests/linkedin.png';
import githubIcon from '../assests/github.png';
import profilePic from '../assests/pic.jpg';
import cvFile from '../assests/docs/Siddhi_CV.pdf';    // Add your CV file name
import resumeFile from '../assests/docs/Siddhi_Resume.pdf';  // Add your Resume file name

const Home = () => {
  return (
    <section className="home">
      <div className="home-info">
        <div className="text-content">
          <span className="greeting">Hello, I'm</span>
          <h1>Siddhi Gawade</h1>
          <h2>Full Stack Developer</h2>
          <p>
            Tech-savvy computer student proficient in multiple programming languages,
            eager to apply my coding prowess and problem-solving skills to real-world
            challenges.
          </p>
          
        </div>
        <div className="btn-sci">
          <div className="buttons">
            <a 
              href={cvFile} 
              className="btn primary-btn" 
              download="Siddhi_CV.pdf"
            >
              Download CV
            </a>
          </div>
          <div className="sci">
            <a 
              href="https://www.linkedin.com/in/siddhi-gawade" 
              className="social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="linkedin" />
            </a>
            <a 
              href="https://github.com/SiddhiGawade" 
              className="social-icon" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github" />
            </a>
          </div>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src={profilePic} alt="Siddhi's Pic" />
          </div>
          <div className="orbit-circle"></div>
          <div className="animated-circles">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;