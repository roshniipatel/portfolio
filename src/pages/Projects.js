import React from 'react';
import './Projects.css';
import dateItineraryImage from '../assets/images/date-itinerary.png';
import onTrackImage from '../assets/images/on-track.png';
import quellImage from '../assets/images/quell.png';
import weatherAppImage from '../assets/images/weather-app.png';

const Projects = () => {
  const projects = [
    {
      title: 'Date Itinerary',
      image: dateItineraryImage,
      description: 'This website caters to individuals in romantic relationships who face challenges in planning dates, either due to their indecisiveness or lack of experience in organizing a well-crafted itinerary.',
      link: 'https://date-itinerary.herokuapp.com/'
    },
    {
      title: 'On Track',
      image: onTrackImage,
      description: 'This application caters to individuals dedicated to cultivating a more health-conscious lifestyle.',
      link: 'https://on-track.herokuapp.com/'
    },
    {
      title: 'Quell',
      image: quellImage,
      description: 'A supportive and empowering community platform dedicated to fostering mental well-being and personal growth.',
      link: 'https://quell-mental-health-9f784a2642a5.herokuapp.com/'
    },
    {
      title: 'Weather Application',
      image: weatherAppImage,
      description: 'An application that shows you the (5 days) temperature for any city that you search for.',
      link: 'https://roshniipatel.github.io/how-is-the-weather/'
    }
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} />
            <h3><a href={project.link}>{project.title}</a></h3>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Projects;

