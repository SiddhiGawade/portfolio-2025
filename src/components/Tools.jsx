import React from 'react';
import './Tools.css';

const Tools = () => {
  const skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'DialogFlow', icon: 'https://api.iconify.design/logos/dialogflow.svg' },
    { name: 'GitHub Copilot', icon: 'https://img.icons8.com/color/48/github-2.png' },
    { name: 'CodeParrot', icon: 'https://img.icons8.com/color/48/code.png' },
    { name: 'Cursor', icon: 'https://img.icons8.com/color/48/cursor--v1.png' },
    { name: 'TRAE', icon: 'https://img.icons8.com/color/48/artificial-intelligence.png' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  return (
    <section className="tools" id="tools">
      <div className="tools-header">
        <h2>Tech Stack</h2>
        <p>Technologies I've Been Working With</p>
      </div>
      
      <div className="tools-container">
        <div className="logo-track">
          {skills.map((skill, index) => (
            <div className="tool-card" key={index}>
              <div className="tool-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="tool-name">{skill.name}</p>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {skills.map((skill, index) => (
            <div className="tool-card" key={`dup-${index}`}>
              <div className="tool-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="tool-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
);
};

export default Tools;