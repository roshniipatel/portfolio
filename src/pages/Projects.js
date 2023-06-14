import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Date Itinerary',
      image: '../assets/images/date-itinerary.png',
      description: 'This website caters to individuals in romantic relationships who face challenges in planning dates, either due to their indecisiveness or lack of experience in organizing a well-crafted itinerary.'
    },
    {
      title: 'On Track',
      image: '../assets/images/on-track.png',
      description: 'This application caters to individuals dedicated to cultivating a more health-conscious lifestyle.'
    },
    {
      title: 'Weather Application',
      image: '../assets/images/weather-app.png',
      description: 'An application that shows you the (5 days) temperature for any city that you search for.'
    }
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
