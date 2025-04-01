import React from 'react';
import './Projects.css';
import eduAIImage from '../assests/EduAI.png';
import impactLinkImage from '../assests/ImpactLink.png';
import cftcImage from '../assests/CFTC.png';
import ecom from '../assests/ecom.png';

const Projects = () => {
  const projects = [
    {
      title: "EduAI",
      description: "A personalized AI-driven learning path dashboard that generates personalized learning paths based on user goals, skill levels, and career aspirations. Features include curated resources, progress tracking, gamification elements like badges and leaderboards, and community-driven peer collaboration.",
      tags: ["React.js", "Tailwind CSS", "ShadCN UI", "Express.js", "MongoDB", "Firebase", "Python", "LangFlow", "TensorFlow"],
      liveLink: "#",
      codeLink: "https://github.com/Yashparmar1125/EduAI",
      image: eduAIImage
    },
    {
      title: "ImpactLink",
      description: "A platform connecting volunteers with NGOs based on interests, skills, and availability. Implemented a seamless matching system for optimized volunteer placement. Features include task discovery, progress tracking, certification management, and campaign monitoring.",
      tags: ["Node.js", "Express.js", "MongoDB", "Flask"],
      liveLink: "#",
      codeLink: "https://github.com/Yashparmar1125/ImpactLink",
      image : impactLinkImage
    },
    {
      title: "C.F.T.C - Charge For The Charged",
      description: "Final Year Project built using Android Studio and Firebase. A platform for buying and selling electricity, featuring a DialogFlow-powered chatbot for enhanced user navigation and interaction. Hosted through Netlify.",
      tags: ["Android Studio", "Firebase", "DialogFlow", "Netlify"],
      liveLink: "#",
      codeLink: "#",
      image : cftcImage
    },
    {
      title: "Online E-commerce Website",
      description: "A fully functional e-commerce website developed during internship. Implemented complete e-commerce functionality with user authentication, product management, shopping cart, and secure checkout process.",
      tags: ["JavaScript", "HTML", "CSS", "Node.js", "MySQL"],
      liveLink: "#",
      codeLink: "#",
      image : ecom

    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>Some Things I've Built</p>
      </div>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image" style={{ 
              background: `url(${project.image || ''}) center/cover no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center'
            }}>
              {index < 2 ? (
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.codeLink} className="project-btn" target="_blank" rel="noopener noreferrer">View Code</a>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;