import React, { useState } from 'react';
import './Achievements.css';
import ssiImage from '../assests/ssi.png';
import projectComp from '../assests/ProjectComp.jpg';
import quasarCert from '../assests/quasar.jpg';
import codeAThon from '../assests/CodeAThon.jpg';
import elocution from '../assests/Elocution.jpg';
import paperPresentation from '../assests/paperPresentation.png';
import DBMSTopper from '../assests/DBMSTopper.jpg';
import LotusInternship from '../assests/LotusInternship.jpg';
import gdgImage from '../assests/0.jpg';

const Achievements = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const achievements = [
    {
      title: "Quasar National-Level Hackathon Finalist",
      description: "Built a Learning Path Dashboard (Top 60 out of 650+ teams)",
      image: quasarCert
    },
    {
      title: "CodeAthon Inter-College Hackathon",
      description: "Ranked 4th, competing among top teams, solving complex challenges with innovative solutions",
      image: codeAThon  // Now this will work since ssiImage is imported
    },
    {
      title: "1st Position in DBMS Certification in Second Year",
      description: "Awarded for excellence in Database Management Systems",
      image: DBMSTopper  // Now this will work since ssiImage is imported
    },
    {
      title: "Project Competition Winner",
      description: "1st Prize in Software Domain (2023-2024)",
      image: projectComp
    },
    {
      title: "Technical Paper Presentation",
      description: "1st Position in State Level Competition (2023-2024)",
      image: paperPresentation
    },
    {
      title: "State Level Elocution Competition",
      description: "1st Prize (2023-2024)",
      image: elocution
    },
    {
      title: "Lotus Educare Academy (April - July 2023)",
      description: "Web Development Summer Internship",
      image: LotusInternship
    },
    {
      title: "Social Service Internship (09/2024 - 11/2024)",
      description: "Taught English to students from 1st to 8th standard",
      image: ssiImage
    }
];

  const handleCircleClick = () => {
    setIsPopupOpen(true);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-header">
        <h2>Achievements</h2>
        <p>Milestones Along My Journey</p>
      </div>
      
      <div className="circles-container">
      <div className="leadership-list">
        <h3>Leadership & Community Involvement</h3>
        <ul>
          <li><strong>Event Head - Google Developers Group (GDG) On Campus VIT</strong> – Led and organized various technical events, workshops, and hackathons to enhance student engagement and learning.</li>
          <li><strong>Class Representative (CR) of Direct Second Year Students, VIT</strong> – Represented the class, coordinated academic discussions, and facilitated communication between students and faculty.</li>
          <li><strong>Hosted Events</strong> – Flutter Road Show, Shape The Web workshop and competition, Hosted Freshers' Day, BAHAAR event, and Alumni Meet, demonstrating leadership and event management skills.</li>
        </ul>
      </div>
      
      <div className="circle-container">
        <div className="circle awards" onClick={handleCircleClick}>
          <div className="circle-content">
            <h3>Achievements</h3>
          </div>
        </div>
        <p className="circle-note">Click on the circle to view achievements</p>
      </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsPopupOpen(false)}>×</button>
            <h2>Achievements</h2>
            <div className="cards-container">
              {achievements.map((item, index) => (
                <div className="achievement-card" key={index}>
                  <div className="card-image" onClick={() => handleImageClick(item.image)}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      onError={(e) => {
                        console.error('Image failed to load:', item.image);
                        e.target.src = 'https://via.placeholder.com/400x300';
                      }}
                    />
                  </div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="image-popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-popup-content">
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;