import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      institution: "Vidyalankar Institute of Technology, Wadala",
      degree: "BTech in Computer Enginneering 3rd Semester (Direct Second Year Admission) (2024-2027)",
      score: "10 CGPA"
    },
    {
      institution: "Bharati Vidyapeeth Institute of Technology, Kharghar",
      degree: "Diploma in Computer Technology (2021-2024)",
      score: "95.03%"
    },
    {
      institution: "P.V.G'S Vidya Bhawan School, Nerul",
      degree: "Secondary School Certificate (SSC) ",
      score: "95.20%"
    }
  ];

  const interests = [
    {
      title: "Dancing",
      icon: "fas fa-music",
      description: "Actively engages in dance performances, contributing vibrant energy to festivals and events. Specializes in various dance forms including classical and contemporary styles.",
      color: "#FF6B6B"
    },
    {
      title: "Cooking",
      icon: "fas fa-utensils",
      description: "Passionate about exploring diverse cuisines and creating innovative recipes. Enjoys experimenting with new ingredients and sharing culinary experiences with others.",
      color: "#6C63FF"
    },
    {
      title: "Drawing & Rangoli",
      icon: "fas fa-palette",
      description: "Bagged few prizes, showcasing creativity and precision in every stroke. Passionate about creating intricate Rangoli designs during festivals and special occasions.",
      color: "#4ECDC4"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-header">
        <h2>About Me</h2>
        <p>Get to know me better</p>
      </div>

      <div className="about-content">
        <div className="education-section">
          <h3>Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-content">
                  <h4>{edu.institution}</h4>
                  <p className="degree">{edu.degree}</p>
                  <p className="score">Score: {edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="interests-section">
          <h3>Interests</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              // In the interests section of the JSX, update the card structure
              <div className="interest-card" key={index} style={{'--accent-color': interest.color}}>
                <div className="interest-header">
                  <div className="interest-icon">
                    <i className={interest.icon}></i>
                  </div>
                  <h4>{interest.title}</h4>
                </div>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;