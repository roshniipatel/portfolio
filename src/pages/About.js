import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <h2>About Me</h2>
      <p>
        Hello, I am Roshni Patel and I am currently enrolled in the fullstack bootcamp at The University of Texas at Austin. I have always been fascinated by computers but didnt consider it as a career until about two years ago when I typed in my first "Hello World" and the rest is history. 
      </p>
      <p>
        I was born and raised in India (mostly) then moved to Houston, Texas when I was about eleven and have stayed here ever since. I have been dancing since I learned to walk and have tried many different dance styles such as: Ballet, Traditional, Contemporary, Modern, and Hip hop. One of my favorite things to do in my free time is staying in and reading books. 
      </p>
      <p className="quote">
        “In three words I can sum up everything I've learned about life: it goes on.”
        <span className="author">- Robert Frost</span>
      </p>
    </div>
  );
};

export default About;

